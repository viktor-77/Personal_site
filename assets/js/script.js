document.addEventListener("DOMContentLoaded", function () {

    // Close mobile menu after link click
    const menu_list = document.querySelector(".navbar-collapse");

    const hide_menu_list = () => {
        menu_list.classList.remove("show");
    }

    if (menu_list) {
        menu_list.addEventListener("click", () => setTimeout(hide_menu_list, 150));
    }

    // Toogle top button
    let scrollTop = document.querySelector('.scroll-top');
    let footer = document.querySelector('footer');
    let isFooterVisible = false;

    function toggleScrollTop() {
        if (scrollTop) {
            if (window.scrollY > 200 && !isFooterVisible) {
                scrollTop.classList.add('active');
            } else {
                scrollTop.classList.remove('active');
            }
        }
    }

    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            isFooterVisible = entry.isIntersecting;
            toggleScrollTop();
        });
    }, { threshold: 0 });

    footerObserver.observe(footer);

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
});
