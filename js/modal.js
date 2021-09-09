let modal = null
const openModal = function(e) {
    if (modal !== null){
        e.preventDefault()
        window.setTimeout(function() {
            modal.style.display = 'none'
            modal = null
        }, 500)
    }
    else{
    console.log(modal)
    modal = document.querySelector(e.target.getAttribute('href'))
    modal.style.display = null
    modal.removeAttribute('aria-hidden')
    modal.setAttribute('aria-modal', 'true')
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
    e.preventDefault()
    }
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

