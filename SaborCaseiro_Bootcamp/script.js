// Menu Hambúrguer
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');
    const navbar = document.querySelector('.navbar');
    
    // Função para verificar se é dispositivo móvel/tablet
    function isMobileOrTablet() {
        return window.innerWidth <= 1024;
    }
    
    // Função para controlar visibilidade do menu hambúrguer
    function updateMenuVisibility() {
        if (isMobileOrTablet()) {
            navbar.classList.add('mobile');
        } else {
            navbar.classList.remove('mobile');
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
            resetBars();
        }
    }
    
    // Função para resetar as barrinhas
    function resetBars() {
        const bars = menuToggle.querySelectorAll('span');
        bars[0].style.transform = 'rotate(0) translate(0, 0)';
        bars[1].style.opacity = '1';
        bars[1].style.transform = 'translateX(0)';
        bars[2].style.transform = 'rotate(0) translate(0, 0)';
    }
    
    // Toggle do menu hambúrguer com animação
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
        
        const bars = menuToggle.querySelectorAll('span');
        if (menuToggle.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            bars[1].style.opacity = '0';
            bars[1].style.transform = 'translateX(-20px)';
            bars[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            resetBars();
        }
    });
    
    // Fechar menu ao clicar em qualquer link
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
            resetBars();
        });
    });
    
    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !menu.contains(e.target)) {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
            resetBars();
        }
    });
    
    // Event listeners para resize
    window.addEventListener('resize', function() {
        updateMenuVisibility();
    });
    
    // Inicializar estado do menu
    updateMenuVisibility();
});
