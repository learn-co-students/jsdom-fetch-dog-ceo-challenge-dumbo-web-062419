console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogImages = document.getElementById("dog-image-container")
const filterButton = document.querySelector('select')
const filterLetter = filterButton.value


document.addEventListener("DOMContentLoaded", function(){
    const dogImages = document.getElementById("dog-image-container");
    fetch(imgUrl)
        .then(response => response.json())
        .then(function(json){
            const result = json.message;
            for (let i = 0; i < result.length; i++){
                let newImg = document.createElement("IMG");
                newImg.src = `${result[i]}`;
                dogImages.append(newImg);
            }
        })
    })

    document.addEventListener("DOMContentLoaded", function(){
        const dogBreeds = document.getElementById("dog-breeds");
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(function(json){
                const breeds = json.message;
                for (var breed in breeds){
                    if (breeds.hasOwnProperty(breed)){
                        let li = document.createElement('li')
                        li.innerText = breed;
                        dogBreeds.append(li);
                        const allBreeds = document.querySelectorAll('li')
                         allBreeds.forEach(function(item){
                            item.addEventListener("click", function(){
                                item.style.color = randomColors();
                            })  
                        })
                    }
                }

            }) 
    })
    
function randomColors() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
      
    }


filterButton.addEventListener("change", function (){
    let allBreeds = document.querySelectorAll('li');
    let letter = filterButton.value
    allBreeds.forEach(function(breed){
        console.log(breed)
        if (breed.textContent[0] !== letter)
            breed.style.display = 'none';
        else if(breed.textContent[0] == letter){
            breed.style.display = 'block'
        }
    })
})

// function filter (letter){
//     let allBreeds = document.querySelectorAll('li')
//     allBreeds.forEach(function(breed){
//         if (breed.textContent[0] !== letter)
//         console.log(letter)
//         breed.remove;
//     })
// }
