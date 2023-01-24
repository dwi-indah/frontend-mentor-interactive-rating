let cardRating = document.querySelector('#card-rating');
let cardSuccess = document.querySelector('#card-success');
let ratingLists = document.querySelectorAll('.rating-list-item');
let ratingButton = document.querySelector('.rating-button');
let ratingResult = document.querySelector('.success-rating span');
let ratingScore = 1;

console.log(cardRating)
console.log(cardSuccess)

function submitRating() {
    cardRating.classList.remove('active');
    cardSuccess.classList.add('active');
    ratingResult.innerText = ratingScore;
}

function chooseRating(e) {
    ratingLists.forEach((item) => {
        item.classList.remove('active');
    })
    e.target.classList.add('active');
    ratingScore = e.target.innerText;
}

ratingButton.addEventListener('click', submitRating);
ratingLists.forEach((item) => {
    item.addEventListener('click', chooseRating);
})