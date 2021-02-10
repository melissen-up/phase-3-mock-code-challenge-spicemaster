// write your code here
// ********** VARIABLES **********
const allBlendsUrl = 'http://localhost:3000/spiceblends/'
const ingredientUrl = 'http://localhost:3000/ingredients/'

const spiceBlendDetail = document.getElementById('spice-blend-detail')
const ingredientUl = spiceBlendDetail.querySelector('.ingredients-list')
const updateForm = document.getElementById('update-form')
const ingredientForm = document.getElementById('ingredient-form')

getFirstBlend()
getIngredients()
// ********** EVENT LISTENERS **********

updateForm.addEventListener('submit', updateEvent)
ingredientForm.addEventListener('submit', addIngredientEvent)

// ********** FUNCTIONS **********

// Advanced Deliverables 

// function getAllBlends() {

// }

// function allSpiceBlends(spiceData) {
//     // console.log(spiceData);
//     spiceData.forEach(blend => showFirstBlend(blend));
// }

function getFirstBlend() {
    fetch(`${allBlendsUrl}1`)
    .then(response => response.json())
    .then(showFirstBlend)
}

function showFirstBlend(blend) {
    let img = spiceBlendDetail.querySelector('.detail-image') 
    let title = spiceBlendDetail.querySelector('.title')

    img.src = blend.image
    img.alt = blend.title
    title.innerHTML = blend.title
}

function getIngredients() {
    fetch(ingredientUrl)
    .then(response => response.json())
    .then(showIngredients)
}

function showIngredients(ingr) {
    ingr.forEach(i => {
        if(i.spiceblendId === 1) {
            let li = document.createElement('li')
            li.innerHTML = i.name
            ingredientUl.appendChild(li)
        }
    })
}

function updateEvent(event) {
    event.preventDefault()
    const title = event.target.title.value
    updateObj = {title}

    fetch(`${allBlendsUrl}/1`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updateObj)
    })

    let htmlTitle = spiceBlendDetail.querySelector('.title')
    htmlTitle.innerHTML = title
}

function addIngredientEvent(event) {
    event.preventDefault()
    const newSpice = event.target.name.value
    let li = document.createElement('li')

    li.innerHTML = newSpice
    ingredientUl.appendChild(li)
}


