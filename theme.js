function applyTheme(theme) {
    const navLinks = document.querySelectorAll("nav a");
    const nav = document.querySelector("nav");

    if (theme === "dark") {
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "white";
        nav.style.backgroundColor = "#0011FF";
        navLinks.forEach(a => a.style.color = "blanchedalmond");
    } else if (theme === "blue") {
        document.body.style.backgroundColor = "rgb(15, 63, 119)";
        document.body.style.color = "white";
        nav.style.backgroundColor = "rgb(27,115,216)";
        navLinks.forEach(a => a.style.color = "white");
    }
}

    function setTheme(theme) {
        theme = theme.toLowerCase();
        localStorage.setItem("theme", theme);
        applyTheme(theme);
    }

    document.addEventListener("DOMContentLoaded", () => {
        const savedTheme = localStorage.getItem("theme") || "blue";
        applyTheme(savedTheme);
    });
