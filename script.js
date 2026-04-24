const atualizarDashboard = () => {
    // Simulando dados dos sensores (Em produção, use fetch para sua API)
    const dados = {
        temp: (18 + Math.random() * 12).toFixed(1),
        umidade: Math.floor(40 + Math.random() * 30),
        eco: 85
    };

    document.getElementById('temp').innerText = dados.temp;
    document.getElementById('umidade').innerText = dados.umidade;
    document.getElementById('economia').innerText = dados.eco;

    // Lógica de alerta para o morango
    const cardTemp = document.getElementById('temp-card');
    if (dados.temp > 27) {
        cardTemp.style.backgroundColor = "#fff0f0";
        console.log("Alerta: Ativar exaustores da estufa!");
    } else {
        cardTemp.style.backgroundColor = "white";
    }
};

setInterval(atualizarDashboard, 5000);