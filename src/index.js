console.log('%c HI', 'color: firebrick')


// Adding dog pictures to the DOM
document.addEventListener('DOMContentLoaded',function(){
  fetch("https://dog.ceo/api/breeds/image/random/4")//Fetching Dog Images
    .then (response => response.json())
      .then(function(json){
          dogArray = json.message;
          dogArray.forEach(function(element){
            const imgTag = document.createElement("img")
            imgTag.setAttribute("src",element)
            dogId.append(imgTag);
          })
  })
const dogId = document.getElementById("dog-image-container")
const ul = document.getElementById("dog-breeds")

fetch('https://dog.ceo/api/breeds/list/all')// Fetching list of Dog Breeds
  .then (response => response.json())
    .then(function(json){
      dogBreed = json.message;
      for(let i = 0; i < Object.keys(dogBreed).length; i++){
        const li = document.createElement("li")
        li.innerText = Object.keys(dogBreed)[i]
        ul.append(li)
      }
    })

});

// On Click for li attribute
document.addEventListener("click", function(){

const li = document.querySelectorAll("ul > li:first-child")
li[0].style.color= 'red';
})

//Sort the dropdown





document.addEventListener("change",function(){
const dropDown = document.getElementById("breed-dropdown");
let breeds = document.querySelectorAll("li");
let selectLetter = dropDown.value;
breeds.forEach(function(element){
  if (element.innerText[0] !== selectLetter){
    element.remove();
  }
})

})
