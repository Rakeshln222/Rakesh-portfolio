let togglerBtn = document.querySelector(".toggler-btn")
let menuItem = document.querySelector(".menu-item")

togglerBtn.addEventListener("click", function(){
    menuItem.classList.toggle("active-menu")
});

// get current year from date object
let yr = document.getElementById('yr')
yr.innerText = new Date().getFullYear();