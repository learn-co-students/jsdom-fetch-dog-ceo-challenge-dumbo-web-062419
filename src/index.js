
// --------------------------Constants

// const dropDown = document.getElementById("breed-dropdown")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// ---------------------------Fetches

function fetchDogImages() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(imgs => renderImgs(imgs.message));
};

function fetchDogBreeds() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => renderBreeds(Object.keys(data.message)));
};


// ----------------------------DOM-Minuplualtion/ SlapToDom

function renderImgs(imgs) {
    const imgTag = document.getElementById("dog-image-container");

    imgs.forEach(function(img) {
        imgTag.innerHTML += 
        `<img src="${img}">`;
    });
};

function renderBreeds(breeds) {
    const ul = document.getElementById("dog-breeds");
    const dropDown = document.getElementById("breed-dropdown")
    breeds.forEach(function(breed) {

    if (dropDown.value == breed[0]) {
        const createdLi = document.createElement('li')
        ul.append(createdLi)
        createdLi.innerHTML += 
        `${breed}`
        createdLi.addEventListener('click', function(){
            createdLi.style.color = "red"
        })
    };
    })
}
// --------------------AddEventListeners

document.addEventListener("DOMContentLoaded", function() {
    fetchDogImages();
    fetchDogBreeds();
})