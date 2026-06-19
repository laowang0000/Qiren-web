@echo off
setlocal

cd /d "%~dp0"

if not exist "package.json" (
  echo This script must be run from the portfolio project folder.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo Dependencies are not installed yet.
  echo Run npm install first, then double-click this file again.
  pause
  exit /b 1
)

echo Starting Ong Qi Ren Portfolio on http://127.0.0.1:5174/
start "Ong Qi Ren Portfolio Dev Server" cmd /k "npm run dev"

timeout /t 3 /nobreak >nul
start "" "http://127.0.0.1:5174/"

endlocal
