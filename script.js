const cards = document.querySelectorAll('.card');
console.log(cards);

//variables
var hasFlippedCard = false;
var firstCard, secondCard;

cards.forEach(card => card.addEventListener('click', flip));
//functions
function flip(){
    // console.log('flip');
    // console.log(this);
    this.classList.add('flip');
    if(!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    } else {
        //second click
        hasFlippedCard = false;
        secondCard = this;
        console.log(firstCard);
        console.log(secondCard);
        checkForMatch();
    }
}

function checkForMatch(){
    // console.log("checkForMatch");
    if(firstCard.dataset.image === secondCard.dataset.image){
        //match
        success();
    } else {
        //not a match
        fail();
    }
}

function success(){
    // console.log("success");
    firstCard.removeEventListener('click', flip);
    secondCard.removeEventListener('click', flip);
    reset();
}

function fail(){
    // console.log("fail");
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        reset();
    }, 1500);
}

function reset(){
    hasFlippedCard = false;
    firstCard = null;
    secondCard = null;
}

//TODO shuffle the cards
(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

