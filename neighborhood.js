let randomBtn = document.querySelector("#random");
let restClass = document.getElementsByClassName("rest");
const restaurants = [];

for(let i = 0; i < restClass.length; i++){
    restaurants.push(restClass[i].id);
}

function recommender(evt){
    let ranNum = Math.floor(Math.random() * restaurants.length);
    alert(restaurants[ranNum]);
}

randomBtn.addEventListener('click',recommender);