# 📊 Monitoring Platform Sistem

## Overview

Monitoring Platform Sistem is a web-based monitoring solution designed to provide real-time visibility into system performance, resource utilization, and infrastructure health. The platform collects and displays critical metrics such as CPU usage, memory consumption, disk utilization, and network activity through an interactive dashboard.

The goal of this project is to help administrators and engineers monitor system status efficiently, identify potential issues early, and improve overall operational reliability.

---

## Features

### Real-Time Monitoring

* Monitor CPU utilization
* Monitor memory usage
* Monitor disk usage
* Monitor network traffic
* Display system status in real time

### Dashboard Visualization

* Interactive dashboard
* Resource usage charts
* System health overview
* Historical performance tracking

### Alert Management

* Threshold-based alerts
* Resource utilization warnings
* System health notifications

### User Interface

* Responsive design
* Modern dashboard layout
* Easy-to-understand visualizations
* Cross-device compatibility

---

## System Architecture

The platform follows a centralized monitoring architecture where monitoring agents collect system metrics and send them to a backend service for processing and storage.

```text
+---------------------+
| Monitoring Agent    |
+---------------------+
           |
           v
+---------------------+
| Backend API Server  |
+---------------------+
           |
           v
+---------------------+
| Database Storage    |
+---------------------+
           |
           v
+---------------------+
| Monitoring Dashboard|
+---------------------+
```

---

## Technology Stack

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Containerization

* Docker
* Docker Compose

### Version Control

* Git
* GitHub

---

## Project Structure

```text
monitoring-platform-sistem/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── docker/
│
├── screenshots/
│
├── docker-compose.yml
│
└── README.md
```

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/handika-nainggolan/monitoring-platform-sistem.git
cd monitoring-platform-sistem
```

---

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

### 4. Configure Environment Variables

Create a `.env` file in the backend directory.

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/monitoringdb
JWT_SECRET=your_secret_key
```

---

### 5. Run Backend

```bash
cd backend
npm start
```

---

### 6. Run Frontend

```bash
cd frontend
npm start
```

The application will be available at:

```text
Frontend: http://localhost:3000
Backend : http://localhost:5000
```

---

## Docker Deployment

Build and start all services:

```bash
docker-compose up --build
```

Run in detached mode:

```bash
docker-compose up -d
```

Stop services:

```bash
docker-compose down
```

---

## Dashboard Preview

Add screenshots of your monitoring dashboard inside the screenshots folder.

Example:

```text
screenshots/
├── dashboard-overview.png
├── cpu-monitoring.png
├── memory-monitoring.png
└── network-monitoring.png
```

---

## Key Functionalities

### System Monitoring

* Real-time metric collection
* Resource usage tracking
* Infrastructure health monitoring

### Data Management

* Store historical monitoring data
* Retrieve performance statistics
* Generate monitoring reports

### Alert System

* Resource threshold detection
* Warning notifications
* System status updates

---

## Use Cases

* Server monitoring
* Infrastructure monitoring
* Performance analysis
* Resource utilization tracking
* Data center management
* Cloud resource monitoring
* IT operations monitoring

---

## Future Improvements

Planned enhancements include:

* Prometheus integration
* Grafana dashboards
* Kubernetes monitoring
* Email notifications
* WhatsApp notifications
* Telegram alerts
* Multi-server support
* Role-based access control
* Log monitoring
* Distributed tracing
* CI/CD integration

---

## Learning Outcomes

Through this project, the following concepts were explored:

* System monitoring principles
* Backend API development
* Database integration
* Docker containerization
* Dashboard development
* Infrastructure observability
* DevOps practices
* Performance monitoring

---

## Author

### Handika Pratama Nainggolan

D3 Teknologi Komputer – Institut Teknologi Del

GitHub:
https://github.com/handika-nainggolan

Email:
[handikanainggolan24@gmail.com](mailto:handikanainggolan24@gmail.com)

---



Feel free to use, modify, and distribute this project for educational and personal purposes.
