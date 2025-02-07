function showDetails(button, count, triCode) {
    // Remover caixas visíveis anteriormente
    const openInfoBox = document.querySelector('.info-box');
    if (openInfoBox) {
        openInfoBox.remove();
    }

    // Criar uma nova caixa de informações
    const infoBox = document.createElement('div');
    infoBox.classList.add('info-box');
    infoBox.innerHTML = `
        <span class="student-count">Alunos: ${count}</span>
        <span class="tri-code">TRI: ${triCode}</span>
        <button class="update-count-btn" onclick="redirectToPage(this)">Alterar Contagem</button>
    `;

    // Inserir a caixa de informações abaixo do botão
    button.parentNode.insertBefore(infoBox, button.nextSibling);

    // Calcular a posição abaixo do botão
    const buttonRect = button.getBoundingClientRect();
    infoBox.style.top = `${buttonRect.bottom + window.scrollY + 10}px`;
    infoBox.style.left = `${buttonRect.left + window.scrollX + buttonRect.width / 2}px`;

    // Mostrar a caixa de informações
    infoBox.style.display = 'block';

    // Expansão dos botões
    const buttonsSection = document.querySelector('.buttons-section');
    buttonsSection.classList.add('expanded');
}

// Função para redirecionar para a página com base no botão clicado
function redirectToPage(button) {
    let page = 'contagem.html'; // Página padrão

    // Verificar o conteúdo do botão para determinar para qual página redirecionar
    const buttonText = button.previousSibling.textContent; // Texto do botão anterior (TRI)
    
    if (buttonText.includes('1º ANO EF I A')) {
        page = 'contagem_1.html';
    } else if (buttonText.includes('2º ANO EF I A')) {
        page = 'contagem_2.html';
    } else if (buttonText.includes('3º ANO EF I A')) {
        page = 'contagem_3.html';
    } else if (buttonText.includes('4º ANO EF I B')) {
        page = 'contagem_4.html';
    } else if (buttonText.includes('5º ANO EF I B')) {
        page = 'contagem_5.html';
    } else if (buttonText.includes('6º ANO EF II')) {
        page = 'contagem_6.html';
    } else if (buttonText.includes('7º ANO EF II')) {
        page = 'contagem_7.html';
    } else if (buttonText.includes('8º ANO EF II')) {
        page = 'contagem_8.html';
    } else if (buttonText.includes('9º ANO EF II')) {
        page = 'contagem_9.html';
    } else if (buttonText.includes('1º ANO EM')) {
        page = 'contagem_10.html';
    } else if (buttonText.includes('2º ANO EM')) {
        page = 'contagem_11.html';
    } else if (buttonText.includes('3º ANO EM')) {
        page = 'contagem_12.html';
    } else if (buttonText.includes('ARDUÍNO')) {
        page = 'contagem_13.html';
    } else if (buttonText.includes('AUTORIZADOS PELA DIREÇÃO')) {
        page = 'contagem_14.html';
    } else if (buttonText.includes('CAÇA ASTERÓIDE')) {
        page = 'contagem_15.html';
    } else if (buttonText.includes('PARA GABARITAR')) {
        page = 'contagem_16.html';
    } else if (buttonText.includes('PERSONALIZA')) {
        page = 'contagem_17.html';
    } else if (buttonText.includes('PRÁTICAS INVESTIGATIVAS')) {
        page = 'contagem_18.html';
    } else if (buttonText.includes('ROBÓTICA')) {
        page = 'contagem_19.html';
    } else if (buttonText.includes('SENAI')) {
        page = 'contagem_20.html';
    } else if (buttonText.includes('TÓPICOS AVANÇADOS')) {
        page = 'contagem_21.html';
    }

    // Redireciona para a página correspondente
    window.location.href = page;
}


// Script para manipulação dos contadores
document.getElementById('increase-students').addEventListener('click', function() {
    let count = parseInt(document.getElementById('student-count').textContent);
    document.getElementById('student-count').textContent = count + 1;
});

document.getElementById('decrease-students').addEventListener('click', function() {
    let count = parseInt(document.getElementById('student-count').textContent);
    if (count > 0) {
        document.getElementById('student-count').textContent = count - 1;
    }
});

document.getElementById('increase-tri').addEventListener('click', function() {
    let count = parseInt(document.getElementById('tri-count').textContent);
    document.getElementById('tri-count').textContent = count + 1;
});

document.getElementById('decrease-tri').addEventListener('click', function() {
    let count = parseInt(document.getElementById('tri-count').textContent);
    if (count > 0) {
        document.getElementById('tri-count').textContent = count - 1;
    }
});
