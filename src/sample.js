console.log('%c HI', 'color: firebrick')

function fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(json => renderDogs(json))
}

function renderDogs(json) {
    const imgBox = document.getElementById('dog-image-container')
    json.message.forEach(dog => {
        const imgElement = document.createElement('img')
        imgElement.src = dog
        imgBox.appendChild(imgElement)
    })
}

document.addEventListener("DOMContentLoaded", function () {
    fetchDog()
    fetchBreeds()
})

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(json => renderBreeds(json))
}

function renderBreeds(json) {
    const ul = document.getElementById('dog-breeds')
    for(let i = 0; i < Object.keys(json.message).length; i++){
        const li = document.createElement('li')
        li.innerText= Object.keys(json.message)[i]
        ul.appendChild(li)
    }
}

const breedList = document.getElementById("dog-breeds") 
breedList.addEventListener("click", function(){
})
function coloring() {
    breedList.style 
}