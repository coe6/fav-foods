
let movieArray = []

function filterList(ev) {
    ev.preventDefault()

    const form = ev.target
    const movies = document.querySelector('#movies')

    movies.appendChild(renderList(form))

    form.reset()
    form.movie.focus()
}

function createDeleteBttn(list) {
    const bttn = document.createElement('button')
    bttn.textContent = 'Remove'

    bttn.addEventListener('click', deleteItem)

    list.appendChild(bttn)
}

function deleteItem(ev) {
    ev.preventDefault()

    const listItem = ev.target

    for(var i = 0; i < movieArray.length; i++) {
        if(listItem.parentNode.textContent === `Title: ${movieArray[i].Title}Genre: ${movieArray[i].Genre}Status: ${movieArray[i].Status}Remove`) {
            movieArray.splice(i, 1)
            break
        }
    }

    listItem.parentNode.remove()

}

function renderListItem(type, value) {
    const item = document.createElement('li')
    // const dtItem = document.createElement('dt')
    // dtItem.textContent = type

    // const description = document.createElement('dd')
    // description.textContent = value

    // item.appendChild(dtItem)
    // item.appendChild(description)

    item.textContent = `${type}: ${value}`

    return item
}

function renderList(form) {
    const list = document.createElement('dl')

    const movieItem = {
        'Title': form.movie.value,
        'Genre': form.genres.value,
        'Status': form.watch.value,
    }
    Object.keys(movieItem).map(value => {
         const item = renderListItem(value, movieItem[value])
         list.appendChild(item)
     })

    movieArray.push(movieItem)
    console.log(movieArray)

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