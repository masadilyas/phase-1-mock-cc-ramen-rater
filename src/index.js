document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/ramens")
        .then((res) => res.json())
        .then(ramens => addAllRamen(ramens))

})

function addAllRamen(ramens) {


    ramens.forEach(singleItem => menuItem(singleItem))
}

function menuItem(singleItem) {

    const ramenMenu = document.getElementById("ramen-menu")
    const ramenImage = document.createElement("img")
    ramenImage.src = singleItem.image
    ramenImage.addEventListener("click", imageClick)
    ramenMenu.append(ramenImage)

    function imageClick() {
        const singleImage = document.querySelector("img.detail-image")
        singleImage.src = ramenImage.src
        const name = document.querySelector("h2.name")
        name.innerText = singleItem.name
        const restaurant = document.querySelector("h3.restaurant")
        restaurant.innerText = singleItem.restaurant
        const rating = document.getElementById("rating-display")
        rating.innerText = singleItem.rating
        const comment = document.getElementById("comment-display")
        comment.innerText = singleItem.comment
    }

}


const singleForm = document.getElementById("new-ramen")
singleForm.addEventListener("submit", submitForm)
function submitForm(e) {
    e.preventDefault()
    const newName = document.getElementById("new-name").value
    const newRestaurant = document.getElementById("new-restaurant").value
    const newImage = document.getElementById("new-image").value
    const newRating = document.getElementById("new-rating").value
    const newComment = document.getElementById("new-comment").value
    // console.log(newName.value)
    const newRamenObject = {
        name: newName,
        restaurant: newRestaurant,
        image: newImage,
        rating: newRating,
        comment: newComment,
    }
    menuItem(newRamenObject)
form.reset()
}

