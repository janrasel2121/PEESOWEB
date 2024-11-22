function toggleMenu(clickSelector, menuSelector, toggleClass) {
    document.querySelector(clickSelector).addEventListener("click", function() {
 
        document.querySelectorAll(`.${toggleClass}`).forEach(menu => {
            if (!menu.matches(menuSelector)) {
                menu.classList.remove(toggleClass);
            }
        });

        document.querySelector(menuSelector).classList.toggle(toggleClass);
    });
}

toggleMenu(".clickable", ".dropMenu", "drop");
toggleMenu(".clickable2", ".dropMenu2", "drop");
toggleMenu(".clickable3", ".dropMenu3", "drop");
toggleMenu("#menu", "ul", "show");
