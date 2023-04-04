const toggleTag = document.querySelector("a.toggle-nav")
const navTag = document.querySelector("nav")

toggleTag.addEventListener("click", function () {
    navTag.classList.toggle("open")
    
    if (navTag.classList.contains("open")) {
        toggleTag.innerHTML = '<img src="images/close.svg"> Close'
    } else {
        toggleTag.innerHTML = '<img src="images/menu.svg"> Menu'
    }
})