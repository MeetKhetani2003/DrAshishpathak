@echo off
echo Requesting Administrator privileges to add a security exclusion for this project folder...

:: Check for Administrator privileges
net session >nul 2>&1
if %errorLevel% == 0 (
    goto :admin
) else (
    echo Requesting admin rights...
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    echo UAC.ShellExecute "%~s0", "", "", "runas", 1 >> "%temp%\getadmin.vbs"
    "%temp%\getadmin.vbs"
    del "%temp%\getadmin.vbs"
    exit /B
)

:admin
echo Adding Windows Defender exclusion for: %~dp0
powershell -Command "Add-MpPreference -ExclusionPath '%~dp0'"
echo.
echo Done! Please close this window, return to your code editor, and try running:
echo npm run dev
echo.
pause
