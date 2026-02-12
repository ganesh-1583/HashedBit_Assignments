function swapTheme() {
    const app = document.getElementById("app");
    const btn = document.getElementById("swap");

    if (app.classList.contains("day")) {
        app.classList.replace("day", "night");
        btn.classList.replace("button_day", "button_night");
    } else {
        app.classList.replace("night", "day");
        btn.classList.replace("button_night", "button_day");
    }
}