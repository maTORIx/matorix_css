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
    }
    element.classList.toggle(className)
}