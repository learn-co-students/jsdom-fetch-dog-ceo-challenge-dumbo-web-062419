window.addEventListener('DOMContentLoaded', function(){
    console.log('%c HI', 'color: firebrick');
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    function getDogs() {fetch(imgUrl).then(response => response.json()).then(json => insertDogs(json))}

    function getBreeds() {fetch(breedUrl).then(response => response.json()).then(json => showBreeds(json))}

    function insertDogs(json){
       const imgList = json.message;
       imgList.forEach(function(item){
           buildImage(item);
       });
    }

    function buildImage(item){
        const div = document.getElementById("dog-image-container");
        const img = document.createElement("img");
        img.setAttribute("src", item);
        div.appendChild(img);
    }

    function showBreeds(json){
        const breedList = Object.keys(json.message);
        const ul = document.getElementById("dog-breeds");
        
        breedList.forEach(function(item){
            const li = document.createElement("li");
            li.innerText = item;
            ul.appendChild(li);
        });
    }
    getBreeds();
    getDogs();
});