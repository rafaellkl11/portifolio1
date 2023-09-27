const navItem = document.querySelectorAll(".nav-itens");

navItem.forEach((item) => {
    item.addEventListeneer("click", () => {
        if (ReportBody.classList.contains("menu-nav-active")) {
            ReportBody.classList.remove("menu-nav-active");
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})