
function renderListItem() {

}

function renderList(form) {

}

function handleSubmit(ev) {
    ev.preventDefault()

    const form = ev.target
    const foods = document.querySelector('#foods')

    foods.appendChild(renderList(form))

    form.reset()
    form.food.focus()
}

const form = document.querySelector('form#foodInput')
form.addEventListener('submit', handleSubmit)