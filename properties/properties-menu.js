// Script específico para el menú móvil en properties.html
document.addEventListener('DOMContentLoaded', function() {
    console.log('Iniciando script de menú para properties.html');
    
    // Esperar un momento para asegurar que el DOM esté completamente cargado
    setTimeout(function() {
        // Selectores directos
        const menuButton = document.querySelector('.mobile-menu-toggle');
        const mainNav = document.querySelector('.main-nav');
        
        console.log('Elementos encontrados:', { 
            menuButton: menuButton !== null, 
            mainNav: mainNav !== null 
        });
        
        if (!menuButton || !mainNav) {
            console.error('No se encontraron los elementos necesarios para el menú móvil');
            return;
        }
        
        // Asegurar que el menú esté oculto inicialmente
        mainNav.style.display = 'none';
        
        // Función para alternar el menú
        function toggleMenu() {
            const isActive = mainNav.style.display === 'block';
            console.log('Alternando menú. Estado actual:', isActive ? 'abierto' : 'cerrado');
            
            if (isActive) {
                // Cerrar menú
                mainNav.style.display = 'none';
                mainNav.style.right = '-100%';
                menuButton.classList.remove('active');
            } else {
                // Abrir menú
                mainNav.style.display = 'block';
                mainNav.style.visibility = 'visible';
                mainNav.style.opacity = '1';
                mainNav.style.transform = 'none';
                mainNav.style.right = '0';
                mainNav.style.zIndex = '9999';
                mainNav.style.position = 'fixed';
                mainNav.style.top = '70px';
                mainNav.style.width = '100%';
                mainNav.style.height = 'calc(100vh - 70px)';
                mainNav.style.backgroundColor = 'white';
                mainNav.style.overflowY = 'auto';
                mainNav.style.transition = 'right 0.3s ease-in-out';
                menuButton.classList.add('active');
            }
        }
        
        // Evento de clic en el botón
        menuButton.addEventListener('click', function(e) {
            console.log('Botón de menú clickeado');
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
            return false;
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (mainNav.style.display === 'block' && 
                !mainNav.contains(e.target) && 
                !menuButton.contains(e.target)) {
                console.log('Clic fuera del menú - cerrando');
                toggleMenu();
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (mainNav.style.display === 'block') {
                    console.log('Enlace clickeado - cerrando menú');
                    toggleMenu();
                }
            });
        });
        
        console.log('Script de menú móvil configurado correctamente');
    }, 100); // Pequeño retraso para asegurar que el DOM esté listo
});
