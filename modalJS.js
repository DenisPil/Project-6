let modal = null
console.log("test")
const openModal = function(e) {
    e.preventDefault()
    modal = document.querySelector(e.target.getAttribute('href'))
    console.log("test", modal, modal.style.display)
    modal.style.display = null
    console.log("test2", modal, modal.style.display)
    modal.removeAttribute('aria-hidden')
    modal.setAttribute('aria-modal', 'true')
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}

const closeModal = function(e) {
    
    e.preventDefault()
    window.setTimeout(function() {
        modal.style.display = 'none'
        modal = null
    }, 500)
    
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelector(".js-modal-close").removeEventListener('click', closeModal)
    modal.querySelector(".js-modal-stop").removeEventListener('click', stopPropagation)
    
}

const stopPropagation = function(e) {
    e.stopPropagation()
}

window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.key === "Esc") {
        closeModal(e)
    }

})

document.querySelectorAll('.js-modal').forEach( a => {
    a.addEventListener('click', openModal)

})

