const slideArea = document.querySelector("div.slide")
const images = document.querySelectorAll("div img")

let currentSlide = 1
let z = 1

slideArea.addEventListener("click", function () {
    currentSlide = currentSlide + 1
    
    if (currentSlide > images.length - 1) {
        currentSlide = 1
    }
    
    z = z + 1

    images.forEach(function (image) {
        image.style.animation = ""
    })
    
    images[currentSlide].style.zIndex = z
    images[currentSlide].style.animation = "fade 0.5s"
})

slideArea.addEventListener("mouseover", function () {
    images.forEach(function (image) {
        const x = 25 * (Math.floor(Math.random() * 5)) - 50
        const y = 25 * (Math.floor(Math.random() * 5)) - 50

        image.style.transform = `translate(${x}px, ${y}px)`
    })
})

slideArea.addEventListener("mouseout", function () {
    images.forEach(function (image) {
        image.style.transform = ""
    })
})