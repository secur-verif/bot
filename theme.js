const root = document.querySelector(":root");
const themeButton = document.getElementById("theme");

function changeTheme(themeName) {

    const properties = {
        dark: {
            "--default-container": "#303136",
            "--default-color": "#e7e7e7",
            "--default-color-active": "#fff",
            "--default-bg": "#252525",
            "--default-shadow": "#111"
        },
        white: {
            "--default-container": "#fff",
            "--default-color": "#e7e7e7",
            "--default-color-active": "#000",
            "--default-bg": "#f0f8ff",
            "--default-shadow": "#111"
        }
    }

    const theme = themeName==="dark" ? "dark" : "white";

    for(const property in properties[theme]) {
        const value = properties[theme][property];

        root.style.setProperty(property, value);
    }

}

themeButton.addEventListener("click", (e) => {
    e.preventDefault()

    document.body.classList.toggle("dark");
    changeTheme(document.body.classList[0]);

})