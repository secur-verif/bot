const root = document.querySelector(":root");
const themeButton = document.querySelector(".theme");

function setTheme(theme) {
    switch (theme) {
        case "dark":
            root.style.setProperty("--default-container", "#303136");
            root.style.setProperty("--default-navigation", "#e7e7e7");
            root.style.setProperty("--default-navigation-active", "#fff");
            themeButton.querySelector("i").classList.replace("ri-moon-line", "ri-sun-line");
            break;

        default:
            root.style.setProperty("--default-container", "#fff");
            root.style.setProperty("--default-navigation", "#303136");
            root.style.setProperty("--default-navigation-active", "#000");
            themeButton.querySelector("i").classList.replace("ri-sun-line", "ri-moon-line");
            break;
    }
}

themeButton.addEventListener("click", (e) => {
    themeButton.classList.toggle("switched");
    document.body.classList.toggle("dark");

    setTheme(document.body.classList[0]);
})