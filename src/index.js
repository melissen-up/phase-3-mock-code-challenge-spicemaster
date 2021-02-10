// write your code here
// ********** VARIABLES **********
const allBlendsUrl = 'http://localhost:3000/spiceblends/'
const ingredientUrl = 'http://localhost:3000/ingredients/'

const spiceBlendDetail = document.getElementById('spice-blend-detail')
const updateForm = document.getElementById('update-form')
const ingredientForm = document.getElementById('ingredient-form')

getSpiceBlend()
// ********** EVENT LISTENERS **********

updateForm.addEventListener('submit', updateEvent)
ingredientForm.addEventListener('submit', addIngredientEvent)

// ********** FUNCTIONS **********

function getSpiceBlend() {
    fetch(allBlendsUrl)
    .then(response => response.json())
    .then(allSpiceBlends)
}

function allSpiceBlends(spiceData) {
    // console.log(spiceData);
    spiceData.forEach(blend => showFirstBlend(blend));
}
// this could be more dynamic

function showFirstBlend(blend) {
    if(blend.id == 1) {
        let img = spiceBlendDetail.querySelector('.detail-image') 
        let title = spiceBlendDetail.querySelector('.title')

        img.src = blend.image
        img.alt = blend.title
        title.innerHTML = blend.title
    }
}

function updateEvent(event) {
    event.preventDefault()
    const newTitle = event.target.title.value

    
}

function updateBlend(update) {
    let title = spiceBlendDetail.querySelector('.title')
    title.innerHTML = update
}

function addIngredientEvent(event) {
    event.preventDefault()
    const newTitle = event.target.name.value

    fetch(`${allBlendsUrl}/1`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updateBlend(newTitle))
    })

}