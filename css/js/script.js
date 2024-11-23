// Obtém os elementos do DOM
const btnCadastrar = document.getElementById('btnCadastrar');
const btnCalcular = document.getElementById('btnCalcular');
const btnReiniciar = document.getElementById('btnReiniciar');
const telaCadastro = document.getElementById('cadastro');
const telaMedicao = document.getElementById('medicao');
const resultado = document.getElementById('resultado');

// Verificação de carregamento
console.log("Arquivo script.js carregado com sucesso!");

// Evento para o botão "Cadastrar"
btnCadastrar.addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    if (!nome || !idade) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Oculta a tela de cadastro e exibe a de medição
    telaCadastro.classList.add('hidden');
    telaMedicao.classList.remove('hidden');
});

// Evento para o botão "Calcular"
btnCalcular.addEventListener('click', () => {
    const glicemia = parseFloat(document.getElementById('glicemia').value);

    if (isNaN(glicemia)) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    if (glicemia < 70) {
        resultado.innerText = 'Glicemia baixa. Procure orientação médica.';
        resultado.style.color = 'orange';
    } else if (glicemia >= 70 && glicemia <= 140) {
        resultado.innerText = 'Glicemia normal.';
        resultado.style.color = 'green';
    } else {
        resultado.innerText = 'Glicemia alta. Procure orientação médica.';
        resultado.style.color = 'red';
    }
});

// Evento para o botão "Novo Cadastro"
btnReiniciar.addEventListener('click', () => {
    // Limpa os campos
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('glicemia').value = '';
    resultado.innerText = '';

    // Volta para a tela de cadastro
    telaCadastro.classList.remove('hidden');
    telaMedicao.classList.add('hidden');
});

// Salvar dados no localStorage
localStorage.setItem('nome', nome);
localStorage.setItem('idade', idade);

// Recuperar dados do localStorage
const nomeSalvo = localStorage.getItem('nome');
const idadeSalva = localStorage.getItem('idade');
console.log(nomeSalvo, idadeSalva);
