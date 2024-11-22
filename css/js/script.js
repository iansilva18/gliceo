// Obtendo os elementos
const btnCadastrar = document.getElementById('btnCadastrar');
const btnCalcular = document.getElementById('btnCalcular');
const telaCadastro = document.getElementById('telaCadastro');
const telaMedicao = document.getElementById('telaMedicao');
const resultado = document.getElementById('resultado');
const glicemiaInput = document.getElementById('glicemia');
const historicoDiv = document.getElementById('historico');

// Função para salvar o histórico de glicemia no localStorage
const salvarHistorico = (glicemia) => {
    let historico = JSON.parse(localStorage.getItem('historico')) || [];
    historico.push(glicemia);
    localStorage.setItem('historico', JSON.stringify(historico));
}

// Função para exibir o histórico de glicemia
const exibirHistorico = () => {
    const historico = JSON.parse(localStorage.getItem('historico')) || [];
    if (historico.length > 0) {
        let historicoHTML = '<h2>Histórico de Glicemia</h2><ul>';
        historico.forEach(glicemia => {
            historicoHTML += `<li>${glicemia} mg/dL</li>`;
        });
        historicoHTML += '</ul>';
        historicoDiv.innerHTML = historicoHTML;
    } else {
        historicoDiv.innerHTML = '<p>Sem histórico de medições.</p>';
    }
}

// Função para cadastrar o paciente e mostrar a tela de medição
btnCadastrar.addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    if (!nome || !idade) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Mostra a tela de medição
    telaCadastro.classList.add('hidden');
    telaMedicao.classList.remove('hidden');
});

// Função para calcular a glicemia e exibir o resultado
btnCalcular.addEventListener('click', () => {
    const glicemia = parseFloat(glicemiaInput.value);

    if (isNaN(glicemia) || glicemia <= 0) {
        alert('Por favor, insira um valor válido para glicemia.');
        return;
    }

    // Exibe o resultado da medição
    if (glicemia < 70) {
        resultado.innerText = 'Glicemia baixa. Procure orientação médica.';
        resultado.classList.add('baixa');
    } else if (glicemia >= 70 && glicemia <= 140) {
        resultado.innerText = 'Glicemia normal.';
        resultado.classList.add('normal');
    } else {
        resultado.innerText = 'Glicemia alta. Procure orientação médica.';
        resultado.classList.add('alto');
    }

    // Salva a glicemia no histórico
    salvarHistorico(glicemia);
    
    // Atualiza o histórico exibido
    exibirHistorico();
});

// Carregar o histórico ao abrir a página
window.onload = exibirHistorico;

