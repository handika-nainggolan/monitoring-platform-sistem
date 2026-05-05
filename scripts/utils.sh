#!/bin/bash

log_info() {
    echo "$(date) - INFO: $1"
}

log_error() {
    echo "$(date) - ERROR: $1"
}

check_service() {
    service $1 status | grep running
}

restart_service() {
    sudo service $1 start
}
