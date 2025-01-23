document.addEventListener('DOMContentLoaded', function() {

    const filterHeader = document.querySelector('.filter-H3'); 
    const menuFilter = document.getElementById('menu-filter'); 

    filterHeader.addEventListener('click', function() {
        menuFilter.classList.toggle('active'); 
        menuFilter.style.display = menuFilter.classList.contains('active') ? 'block' : 'none'; 

        if (menuFilter.classList.contains('active')) {
            filterHeader.style.color = 'red';
            const svg = filterHeader.querySelector('svg');
            if (svg) {
                svg.style.fill = 'red'; 
            }
            menuFilter.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)'; 
        } else {
            filterHeader.style.color = ''; 
            const svg = filterHeader.querySelector('svg');
            if (svg) {
                svg.style.fill = ''; 
            }
            menuFilter.style.boxShadow = ''; 
        }
    });

    const menuToggleButton = document.getElementById('menu-toggle-button');
    const dropdownMenu = document.getElementById('dropdown-menu');

    menuToggleButton.addEventListener('click', function() {
        dropdownMenu.classList.toggle('hidden'); 
    });
});
