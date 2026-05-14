@echo off
title TrueForce Dev Server
color 0A

echo.
echo  ============================================================
echo    TRUE FORCE SECURITY - Local Development Server
echo  ============================================================
echo.

cd /d "%~dp0"

REM --- Step 1: Check Node.js is installed ---
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo  [ERROR] Node.js is NOT installed!
    echo  Download it from: https://nodejs.org
    echo.
    pause
    exit /b 1
)
echo  [OK] Node.js found.

REM --- Step 2: Install dependencies if missing ---
if not exist "node_modules\" (
    echo  [!] node_modules not found. Running npm install...
    echo  [*] This may take a few minutes on first run. Please wait...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo  [ERROR] npm install failed!
        echo  Try running: npm install --force
        pause
        exit /b 1
    )
    echo.
    echo  [+] Dependencies installed successfully!
    echo.
) else (
    echo  [OK] Dependencies found.
)

REM --- Step 3: Free port 5173 if already in use ---
for /f "tokens=5" %%a in ('netstat -aon 2^>nul ^| findstr ":5173 " ^| findstr "LISTENING"') do (
    echo  [*] Freeing port 5173 ^(PID %%a^)...
    taskkill /PID %%a /F >nul 2>&1
)

REM --- Step 4: Start Vite server in background first ---
echo.
echo  [*] Starting Vite server in background...
start "ViteServer" /B cmd /c "npm run dev > vite.log 2>&1"

REM --- Step 5: Wait until port 5173 is actually ready ---
echo  [*] Waiting for server to be ready...
set /a tries=0
:waitloop
timeout /t 1 /nobreak >nul
set /a tries+=1
netstat -aon 2>nul | findstr ":5173 " | findstr "LISTENING" >nul 2>&1
if %errorlevel%==0 goto :serverready
if %tries% geq 20 (
    echo  [!] Server is taking longer than usual...
    goto :openbrowser
)
goto :waitloop

:serverready
echo  [+] Server is ready!

:openbrowser
echo  [*] Opening browser at http://localhost:5173
start "" "http://localhost:5173"

echo.
echo  ============================================================
echo    Website is running at: http://localhost:5173
echo    Close this window OR press Ctrl+C to STOP the server.
echo  ============================================================
echo.

REM --- Step 6: Keep window open and show live logs ---
type vite.log 2>nul
cmd /k "npm run dev"
