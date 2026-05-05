function loadLogs() {
    fetch('../logs/system.log')
        .then(res => res.text())
        .then(data => {
            const logBox = document.getElementById('log');
            logBox.innerHTML = formatLogs(data);

            updateStatus(data);
            updateServices(data);
            updateInfo(data);
            updateTime();
        });
}

function formatLogs(data) {
    return data.split("\n").map(line => {
        if (line.includes("ERROR")) {
            return `<div class="log-error">${line}</div>`;
        } else if (line.includes("INFO")) {
            return `<div class="log-info">${line}</div>`;
        } else {
            return `<div>${line}</div>`;
        }
    }).join("");
}

function updateStatus(data) {
    const status = document.getElementById('status');

    if (data.includes("ERROR")) {
        status.innerText = "❌ Problem Detected";
        status.className = "error";
    } else {
        status.innerText = "✅ All Systems Running";
        status.className = "ok";
    }
}

function updateServices(data) {
    const services = document.getElementById('services');

    let nginx = data.includes("nginx running") ? "🟢 nginx: running" : "🔴 nginx: down";
    let docker = data.includes("docker running") ? "🟢 docker: running" : "🔴 docker: down";

    services.innerText = nginx + "\n" + docker;
}

function updateInfo(data) {
    const info = document.getElementById('info');

    const lines = data.split("\n");
    const lastLines = lines.slice(-6).join("\n");

    info.innerText = lastLines;
}

function updateTime() {
    const now = new Date();
    document.getElementById('lastUpdate').innerText =
        "Last Update: " + now.toLocaleTimeString();
}

setInterval(loadLogs, 2000);
