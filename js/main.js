let ham_active = false;

const ham_button = document.getElementById('ham')
const header_menu = document.querySelector(".header-menu");

ham_button.addEventListener('click', () => {
    if (ham_active == false) {
        header_menu.style.visibility = "visible";
        header_menu.style.transform = "translateY(0)";
        ham_active = true;
    } else {
        header_menu.style.visibility = "hidden";
        header_menu.style.transform = "translateY(-100%)";
        ham_active = false; 
    }
});