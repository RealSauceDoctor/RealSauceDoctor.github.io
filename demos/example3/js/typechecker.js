const sentenceTag = document.querySelector('input[type="text"]')
const typesizeTag = document.querySelector('input[name="typesize"]')
const typesizeOutput = document.querySelector("span.typesize-output")
const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

sentenceTag.addEventListener("keyup", function () {
    if (this.value) {
        outputTag.value = this.value
    } else {
        outputTag.value = originalText
    }
})

outputTag.addEventListener("keyup", function () {
    sentenceTag.value = this.value
})

typesizeTag.addEventListener("input", function () {
    outputTag.style.fontSize = this.value + "px"
    typesizeOutput.innerHTML = this.value + "px"
})