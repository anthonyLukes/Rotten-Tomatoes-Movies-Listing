@echo off
REM For building on an x86/Windows environment
REM This does not require installation of nodejs as a prerequisite

REM Build script path
set BUILD=build-main.js

REM r.js path
set RJS=tools\node_modules\r\r.js

REM Node paths
set NODE_32=tools\windows\node32.exe
set NODE_64=tools\windows\node.exe

REM Node paths
If Defined ProgramFiles(x86) set NODE=%NODE_32%
set NODE=%NODE_64%

REM Run node command
@echo on
call %NODE% %RJS% -o %BUILD%