const mainMenu = document.querySelector(".Navigation");
const navigationToggle = document.querySelector(".Navigation-Toggle");

navigationToggle.addEventListener("click", () => {
    const visibility = mainMenu.getAttribute("data-visible");
    console.log(visibility);
    if (visibility === "false") {
        mainMenu.setAttribute("data-visible", true);
        navigationToggle.setAttribute("aria-expanded", true);
    } else {
        mainMenu.setAttribute("data-visible", false);
        navigationToggle.setAttribute("aria-expanded", false);
    }

})