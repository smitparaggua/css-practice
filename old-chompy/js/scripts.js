document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".mobile-menu-icon")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("open")
      document.querySelector(".primary-nav").classList.toggle("active")
    })
}, false)
