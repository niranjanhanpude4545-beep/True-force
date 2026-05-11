@echo off
title TrueForce Website Launcher
color 0A

echo.
echo  ============================================
echo    TRUE FORCE SECURITY - Website Launcher
echo  ============================================
echo.
echo  [*] Starting development server...
echo.

cd /d "%~dp0"

REM Kill any existing Vite process on port 5173
for /f "tokens=5" %%a in ('netstat -aon ^| find ":5173" ^| find "LISTENING" 2^>nul') do (
    echo  [*] Closing existing server on port 5173...
    taskkill /PID %%a /F >nul 2>&1
)

REM Start Vite dev server in the background
start "" /B cmd /c "npm run dev > vite.log 2>&1"

echo  [*] Waiting for server to start...

REM Wait up to 15 seconds for server to be ready
set /a count=0
:waitloop
timeout /t 1 /nobreak >nul
set /a count+=1

REM Check if port 5173 is listening
netstat -aon | find ":5173" | find "LISTENING" >nul 2>&1
if %errorlevel%==0 goto :ready

if %count% geq 15 (
    echo  [!] Server took too long. Opening browser anyway...
    goto :open
)
goto :waitloop

:ready
echo  [+] Server is ready!

:open
echo  [*] Opening browser at http://localhost:5173
start "" "http://localhost:5173"

echo.
echo  ============================================
echo    Website is running at localhost:5173
echo    Close this window to STOP the server.
echo  ============================================
echo.

REM Keep the window open so the server keeps running
cmd /k "npm run dev"
