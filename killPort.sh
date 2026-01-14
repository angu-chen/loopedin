#!/bin/bash

# to run this, first enter 
# chmod +x killPort.sh
# into the terminal to allow the script executable.
if [[ "$NODE_ENV" == "production" ]]; then
  echo "⚠️  This script should not be run in production."
  exit 1
fi

PID=$(lsof -ti :3000)

if [ -n "$PID" ]; then
echo "Port 3000 is in use by PID: $PID"
echo "Killing PID $PID"
kill -9 $PID
echo "Process killed."

else
echo "Port 3000 is free and not in use."
fi


PID2=$(lsof -ti :5173)

if [ -n "$PID2" ]; then
echo "Port 5173 is in use by PID: $PID2"
echo "Killing PID $PID2"
kill -9 $PID2
echo "Process killed."

else
echo "Port 5713 is free and not in use."
fi