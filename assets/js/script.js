document.addEventListener("DOMContentLoaded", function () {
    const menu_list = document.querySelector(".navbar-collapse");

    const hide_menu_list = () => {
        menu_list.classList.remove("show");
    }

    if (menu_list) {
        menu_list.addEventListener("click", () => setTimeout(hide_menu_list, 150));
    }
});
