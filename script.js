// DOM elements  selection and variables

let buttonOne = document.querySelectorAll("button")[0];
let buttonTwo = document.querySelectorAll("button")[1];

let scoreOne = document.querySelectorAll("h1")[0];
let scoreTwo = document.querySelectorAll("h1")[2];

let select = document.querySelector("select");
let maxScore = select.value;

let buttonReset = document.querySelectorAll("button")[2];

// Events

select.addEventListener("change", function (e) {

    maxScore = e.target.value;
})




buttonOne.addEventListener("click", function () {
    let score = parseInt(scoreOne.innerText);
    score++;


    scoreOne.innerText = `${score}`;


    if (score == maxScore) {
        winScoreOne();
        disableButtons();

    }




})

buttonTwo.addEventListener("click", function () {

    let score = parseInt(scoreTwo.innerText);
    score++;
    console.log(score);

    scoreTwo.innerText = `${score}`;

    if (score == maxScore) {
        winScoreTwo();
        disableButtons();
    }

})


buttonReset.addEventListener("click", function () {
    scoreOne.innerText = '0';
    scoreOne.style.color = "black";
    scoreTwo.innerText = '0';
    scoreTwo.style.color = "black";

    buttonOne.disabled = false;
    buttonTwo.disabled = false;
    buttonOne.classList.toggle("buttonOneTwo");
    buttonTwo.classList.toggle("buttonOneTwo");

})



function winScoreOne() {
    scoreOne.style.color = "green";
    scoreTwo.style.color = "red";

}
function winScoreTwo() {
    scoreOne.style.color = "red";
    scoreTwo.style.color = "green";

}

function disableButtons() {
    buttonOne.classList.toggle("buttonOneTwo");
    buttonTwo.classList.toggle("buttonOneTwo");
    buttonOne.disabled = true;
    buttonTwo.disabled = true;

}