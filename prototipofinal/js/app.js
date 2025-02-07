// Seleciona os elementos necessários
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');
const content = document.querySelector('main');

// Abre/fecha o menu ao clicar no botão
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// Fecha o menu ao clicar no conteúdo principal
content.addEventListener('click', (e) => {
    // Verifica se o clique foi fora do menu
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('open');
    }
});


