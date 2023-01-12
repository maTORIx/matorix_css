window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dropdown-button").forEach(element => {
        let modal = element.nextElementSibling
        console.log(modal)
        element.addEventListener("click", () => {
            console.log(element)
            toggleClass(modal, "opened")
        })
    });
})

function toggleClass(element, className) {
    if (!element || !className) {
        return
    } else if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}