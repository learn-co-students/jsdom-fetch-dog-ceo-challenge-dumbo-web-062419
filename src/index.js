console.log('%c HI', 'color: firebrick')

//fetch dog imgs (Y)
function fetchDog(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then(json => renderDogs(json))
}

//DOM doggo images (Z)
function renderDogs(json) {
  const imgBox = document.getElementById("dog-image-container")
  json.message.forEach(dogImgURL => {
    const imgElement = document.createElement('img')
    imgElement.src = dogImgURL
    imgBox.appendChild(imgElement)
  })
}

//Events on page load (X)
document.addEventListener("DOMContentLoaded", function(){
  fetchDog();
  fetchBreeds();
})


// fetch dog breeds
function fetchBreeds(){
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(json => renderBreeds(json))
}


//DOM doggo breeds & color change
function renderBreeds(json){
  const breedList = document.getElementById("dog-breeds")
  Object.keys(json.message).forEach(dogBreed => {
    const li = document.createElement('li')
    li.innerText = dogBreed
    breedList.appendChild(li)
    li.addEventListener("click", function(){
      li.style.color = "blue";
    })
  })
}



// breed dropdown
let breedDD = document.getElementById("breed-dropdown");

breedDD.onchange = function(){
  let allBreeds = document.querySelectorAll("li");
  let selectedLetter = document.getElementById("breed-dropdown").value;
  allBreeds.forEach(function(breed) {
    if (breed.innerText[0] !== selectedLetter) {
      breed.remove();
    }
  })
}
