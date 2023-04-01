//SET-UP
let pageNumber = 0

const pages = [
    {copy: "a storyteller", background: "red", logo: "blue"},
    {copy: "a dreamer", background: "blue", logo: "green"},
    {copy: "a creator", background: "green", logo: "white"},
    {copy: "an alquemist", background: "white", logo: "black"},
    {copy: "a worldbuilder", background: "black", logo: "orange"},
    {copy: "a designer", background: "orange", logo: "yellow"},
    {copy: "a ruler", background: "yellow", logo: "red"}
]

const nextTag = document.querySelector("footer img.next")
const prevTag = document.querySelector("footer img.prev")
const randomTag = document.querySelector("footer img.random")

const outputTag = document.querySelector("h2")
const logoTag = document.querySelector("section div.logo")
const bgTag = document.querySelector("body")

//FUNCIONES
const next = function () {
    pageNumber = pageNumber + 1
    if (pageNumber > pages.length - 1) {
        pageNumber = 0
    }
    updateSection()
}

const prev = function () {
    pageNumber = pageNumber - 1
    if (pageNumber < 0) {
        pageNumber = pages.length - 1
    }
    updateSection()
}

const random = function () {
    pageNumber = Math.floor(Math.random() * pages.length)
    updateSection()
}

const updateSection = function () {
    outputTag.innerHTML = pages[pageNumber].copy
    logoTag.style.backgroundColor = pages[pageNumber].logo
    bgTag.style.backgroundColor = pages[pageNumber].background
}

//EVENTOS
nextTag.addEventListener("click", function () {
    next()
})

prevTag.addEventListener("click", function () {
    prev()
})

randomTag.addEventListener("click", function () {
    random()
})

document.addEventListener("keyup", function (event) {
    console.log(event)
    if (event.key == "ArrowRight") {
        next()
    }
    if (event.key == "ArrowLeft") {
        prev()
    }
    if (event.key == " ") {
        random()
    }
})