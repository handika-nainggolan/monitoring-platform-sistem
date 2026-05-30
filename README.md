# 🚀 DevOps Monitoring Platform

A Linux-based monitoring platform built using Bash Script, Crontab, Nginx, Docker, Grafana, and Prometheus. This project automates service monitoring, logging, and self-healing processes while providing real-time system visualization through dashboards.

---

## 📌 Overview

The DevOps Monitoring Platform is designed to monitor critical Linux services automatically. The system checks service status, records logs, performs automatic recovery when a service fails, and visualizes system performance using Grafana dashboards.

This project was developed as part of a Linux and DevOps learning journey, focusing on automation, monitoring, and service management.

---

## ✨ Features

- ✅ Automatic service monitoring
- ✅ Self-healing (auto restart service)
- ✅ Logging system
- ✅ Real-time dashboard
- ✅ Cron-based automation
- ✅ CPU monitoring
- ✅ Memory monitoring
- ✅ Disk usage monitoring
- ✅ Network monitoring
- ✅ Grafana visualization
- ✅ Prometheus metrics collection

---

## 🛠️ Technologies Used

- Linux (Ubuntu)
- Bash Script
- Crontab
- Nginx
- Docker
- Docker Compose
- Prometheus
- Grafana
- Node Exporter
- Git & GitHub

---

## 📂 Project Structure

```bash
devops-monitoring-system/
│
├── config/
│   └── services.conf
│
├── scripts/
│   ├── monitor.sh
│   └── utils.sh
│
├── logs/
│   ├── system.log
│   └── error.log
│
├── dashboard/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── prometheus/
│   └── prometheus.yml
│
├── docker-compose.yml
│
└── README.md
```

---

## ⚙️ How It Works

### 1. Service Monitoring

The monitoring script continuously checks configured services such as:

- Nginx
- Docker

### 2. Logging

All monitoring activities are stored in:

```bash
logs/system.log
```

Errors are stored in:

```bash
logs/error.log
```

### 3. Self-Healing

If a service stops unexpectedly:

- System detects failure
- Logs the error
- Automatically restarts the service

### 4. Automation

The monitoring script is executed automatically using Crontab.

Example:

```bash
*/1 * * * * /home/handika/devops-monitoring-system/scripts/monitor.sh
```

This runs every minute.

### 5. Dashboard

Monitoring results are displayed through:

```bash
http://localhost:8080/dashboard
```

Dashboard displays:

- Service Status
- System Information
- Logs
- Last Update

### 6. Grafana Monitoring

Grafana provides advanced visualization for:

- CPU Usage
- Memory Usage
- Disk Usage
- Network Traffic
- Uptime

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/handika-nainggolan/monitoring-platform-sistem.git
cd monitoring-platform-sistem
```

### Give Execute Permission

```bash
chmod +x scripts/*.sh
```

### Run Monitoring Script

```bash
./scripts/monitor.sh
```

### Start Dashboard

```bash
cd dashboard
python3 -m http.server 8080
```

Open browser:

```bash
http://localhost:8080
```

---

## 📊 Grafana Dashboard

The project integrates:

- Prometheus
- Node Exporter
- Grafana

Grafana provides real-time monitoring and performance visualization.

Example metrics:

- CPU Usage
- Memory Usage
- Disk Usage
- Network Traffic
- System Uptime

---

## 🧪 Testing

### Stop Nginx

```bash
sudo systemctl stop nginx
```

### Run Monitoring Script

```bash
./scripts/monitor.sh
```

Expected Result:

```text
ERROR: nginx is down! Restarting...
```

The system automatically restarts Nginx and records the activity in the logs.

---

## 🎯 Learning Objectives

Through this project, I learned:

- Linux Service Management
- Bash Scripting
- Process Monitoring
- Crontab Automation
- Logging System
- Docker Fundamentals
- Grafana & Prometheus Monitoring
- DevOps Automation Concepts

---

## 📸 Screenshots

### Dashboard

Add dashboard screenshot here.

### Grafana Monitoring

Add Grafana screenshot here.

---

## 👨‍💻 Author

**Handika Pratama Nainggolan**

- GitHub: https://github.com/handika-nainggolan
- Email: handikanainggolan24@gmail.com

---

## ⭐ Future Improvements

- Email Notification
- Telegram Alert
- Web API Integration
- Multi-Service Monitoring
- Docker Container Monitoring
- Kubernetes Integration
