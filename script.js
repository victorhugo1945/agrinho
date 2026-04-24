// Configuração do Gráfico
const ctx = document.getElementById('historyChart').getContext('2d');
const historyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['08:00', '10:00', '12:00', '14:00', '16:00'],
        datasets: [{
            label: 'Temperatura interna (°C)',
            data: [22, 25, 29, 28, 24],
            borderColor: '#27ae60',
            tension: 0.3
        }]
    }
});

// Simulação de atualização de dados
function updateSensors() {
    // Aqui você usaria fetch() para pegar dados reais
    const temp = (20 + Math.random() * 10).toFixed(1);
    const humidity = Math.floor(Math.random() * 100);
    
    document.getElementById('temp-val').innerText = `${temp}°C`;
    document.getElementById('soil-val').innerText = `${humidity}%`;
    
    const status = document.getElementById('status-val');
    if (humidity < 40) {
        status.innerText = "Ligado";
        status.className = "on";
    } else {
        status.innerText = "Desligado";
        status.className = "off";
    }
}

setInterval(updateSensors, 3000); // Atualiza a cada 3 segundos