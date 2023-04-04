const slideArea = document.querySelector("div.slide")
const images = document.querySelectorAll("img")

let currentSlide = 1
let z = 1

slideArea.addEventListener("click", function () {
    currentSlide = currentSlide + 1
    
    if (currentSlide > images.length - 1) {
        currentSlide = 1
    }
    
    z = z + 1
    
    images[currentSlide].style.zIndex = z
    images[currentSlide].style.animation = "fade 0.5s"

    
})