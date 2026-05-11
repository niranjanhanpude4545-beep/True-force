@echo off
title TrueForce Website Launcher
color 0A

echo.
echo  ============================================
echo    TRUE FORCE SECURITY - Website Launcher
echo  ============================================
echo.

cd /d "%~dp0"

REM Check if node_modules exists - if not, run npm install first
if not exist "node_modules\" (
    echo  [!] node_modules not found. Running npm install...
    echo  [*] This may take a few minutes on first run. Please wait...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo  [ERROR] npm install failed! Make sure Node.js is installed.
        echo  Download Node.js from: https://nodejs.org
        pause
        exit /b 1
    )
    echo.
    echo  [+] Installation complete!
    echo.
) else (
    echo  [+] Dependencies found. Skipping install.
)

REM Kill any existing Vite process on port 5173
for /f "tokens=5" %%a in ('netstat -aon 2^>nul ^| findstr ":5173 " ^| findstr "LISTENING"') do (
    echo  [*] Closing existing server on port 5173...
    taskkill /PID %%a /F >nul 2>&1
)

echo  [*] Starting development server...
echo.

REM Start Vite dev server in background first
start "" /B cmd /c "npm run dev > vite.log 2>&1"

echo  [*] Waiting for server to be ready...

REM Wait up to 20 seconds for server to be ready
set /a count=0
:waitloop
timeout /t 1 /nobreak >nul
set /a count+=1

netstat -aon 2>nul | findstr ":5173 " | findstr "LISTENING" >nul 2>&1
if %errorlevel%==0 goto :ready

if %count% geq 20 (
    echo  [!] Server is taking longer than usual. Opening browser anyway...
    goto :open
)
goto :waitloop

:ready
echo  [+] Server is ready!

:open
echo  [*] Opening browser...
start "" "http://localhost:5173"

echo.
echo  ============================================
echo    Website running at: http://localhost:5173
echo    Close this window to STOP the server.
echo  ============================================
echo.

REM Keep window open and show server logs
cmd /k "npm run dev"
