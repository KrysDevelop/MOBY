// Toggle del menú móvil
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado - Iniciando script del menú móvil');
    
    // Selectores mejorados para mayor compatibilidad
    const menuToggle = document.querySelector('.mobile-menu-toggle, [data-menu-toggle]');
    const mainNav = document.querySelector('.main-nav, [data-main-nav]');
    const navLinks = document.querySelectorAll('.nav-links a, [data-nav-link]');
    
    console.log('Elementos del menú:', { menuToggle, mainNav, navLinks: navLinks.length });

    // Función para alternar el menú
    function toggleMenu() {
        console.log('Alternando menú...');
        if (!menuToggle || !mainNav) {
            console.error('No se encontraron los elementos del menú');
            return;
        }
        
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Forzar visibilidad para móviles
        if (mainNav.classList.contains('active')) {
            mainNav.style.display = 'block';
            mainNav.style.visibility = 'visible';
            mainNav.style.opacity = '1';
            mainNav.style.transform = 'none';
        }
        
        console.log('Estado del menú:', { 
            isActive: mainNav.classList.contains('active'),
            computedStyle: window.getComputedStyle(mainNav)
        });
    }

    // Evento de clic en el botón del menú
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        const isClickInside = mainNav.contains(e.target) || menuToggle.contains(e.target);
        
        if (!isClickInside && mainNav.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Manejar el scroll para el header
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll hacia abajo
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll hacia arriba
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
});

// Efecto de carga suave
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
