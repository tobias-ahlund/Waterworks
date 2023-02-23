hiddenAboutContent = document.querySelector(".hidden-about-content");
dots = document.querySelector(".dots");
aboutUsButton = document.querySelector(".about-us-button");

aboutUsButton.addEventListener("click", () => {
    console.log("hi");
    hiddenAboutContent.classList.toggle("show");
    dots.classList.toggle("show");

    if (aboutUsButton.innerText == "Show more") {
        aboutUsButton.innerText = "Show less";
    } else if (aboutUsButton.innerText == "Show less") {
        aboutUsButton.innerText = "Show more";
    }
});

let spanSelect = document.querySelector(".about-us-paragraph span");
let aboutContent = document.querySelector(".hidden-about-content");

const mediaQuery = window.matchMedia("(min-width: 700px)");
if (mediaQuery.matches) {
    spanSelect.classList.remove("show");
    aboutContent.style.display = "inline";
}