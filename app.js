
let movieArray = []
let deleteArray = []

function filterList(ev) {
    ev.preventDefault()
}

function createDeleteBttn(list) {
    const bttn = document.createElement('button')
    bttn.textContent = 'Remove'

    list.appendChild(bttn)
}

function deleteItem(ev) {
    
}

function renderListItem(type, value) {
    const item = document.createElement('li')
    // const dtItem = document.createElement('dt')
    // dtItem.textContent = type

    // const description = document.createElement('dd')
    // description.textContent = value

    // item.appendChild(dtItem)
    // item.appendChild(description)

    item.textContent = `${type} ${value}`

    return item
}

function renderList(form) {
    const list = document.createElement('dl')

    const movieItem = {
        'Title: ': form.movie.value,
        'Genre: ': form.genres.value,
        'Currently: ': form.watch.value,
    }
    const tempArray = Object.keys(movieItem).map(value => {
         const item = renderListItem(value, movieItem[value])
         list.appendChild(item)

        return movieItem[value]
     })

     tempArray.map(value => {
         movieArray.push(value)
     })

     createDeleteBttn(list)

     return list;

}

function handleSubmit(ev) {
    ev.preventDefault()

    const form = ev.target
    const movies = document.querySelector('#movies')

    movies.appendChild(renderList(form))

    form.reset()
    form.movie.focus()
}

const form = document.querySelector('form#movieInput')
const filterBttn = document.querySelector('#button2')

form.addEventListener('submit', handleSubmit)
filterBttn.addEventListener('submit', filterBttn)