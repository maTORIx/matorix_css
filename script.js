window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dropdown-button, .modal-button").forEach(element => {
        let modal = element.nextElementSibling
        element.addEventListener("click", () => {
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