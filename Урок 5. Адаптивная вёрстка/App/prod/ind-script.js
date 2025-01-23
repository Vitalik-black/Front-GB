document.addEventListener('DOMContentLoaded', function() {
    const menuToggleButton = document.getElementById('menu-toggle-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const menuItems = dropdownMenu.querySelectorAll('.menu__subheading-h4');

    if (menuToggleButton && dropdownMenu) { // Проверяем, существуют ли элементы
        menuToggleButton.addEventListener('click', function() {
            dropdownMenu.classList.toggle('active');
        });
    } else {
        console.error('Ошибка: Элементы menu-toggle-button или dropdown-menu не найдены.');
    }

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
