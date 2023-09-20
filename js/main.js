let ham_active = false;

const ham_button = document.getElementById('ham')
const header_menu = document.querySelector(".header-menu");

ham_button.onmouseover = (event) => {
    if (ham_active == false) {
        ham_button.classList.toggle('openmenu');

        header_menu.style.visibility = "visible";
        header_menu.style.transform = "translateY(0)";
        ham_active = true;
    }
}

ham_button.onmouseleave = (event) => {
    if (ham_active == true) {
        ham_button.classList.toggle('openmenu');

        header_menu.style.visibility = "hidden";
        header_menu.style.transform = "translateY(-100%)";
        ham_active = false; 
    }
}