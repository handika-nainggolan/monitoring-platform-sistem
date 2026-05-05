#!/bin/bash

BASE=$(pwd)
LOG="$BASE/logs/system.log"
ERROR="$BASE/logs/error.log"

source scripts/utils.sh
source config/services.conf

for S in "${SERVICES[@]}"
do
    if ! check_service $S > /dev/null
    then
        MSG=$(log_error "$S is down! Restarting...")
        echo "$MSG" >> "$LOG"
        echo "$MSG" >> "$ERROR"

        restart_service $S
    else
        echo "$(log_info "$S running")" >> "$LOG"
    fi
done

# System Info
echo "===== SYSTEM INFO =====" >> "$LOG"
uptime >> "$LOG"
free -h >> "$LOG"
echo "=======================" >> "$LOG"
