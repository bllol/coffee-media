const menuIcon = document.querySelector(".fa-bars");
const cancelIcon = document.querySelector(".fa-times")
const sidebar = document.querySelector(".nav__sidebarmobile")

menuIcon.addEventListener("click", () => {
    sidebar.style.right = "0"
})

cancelIcon.addEventListener("click", () => {
    sidebar.style.right = "-100%"
})