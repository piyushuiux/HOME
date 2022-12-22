document.querySelector(".button").addEventListener("click",function button2() {
    document.querySelector(".button").classList.add("button2")

    setTimeout(function () {document.querySelector(".button").classList.remove("button2")},200)
})