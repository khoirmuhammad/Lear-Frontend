let current = 1; // page initial sequence (fisrt page)
let marginLeft = '0%'; // margin percentage initial

const slidePage = document.querySelector(".slide-page");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

// Dynamic Logic Start
const totalPages = 4;
const maxPercentage = 100;
const minPercentage = 0;
const intervalPercentage = maxPercentage / totalPages;


let currentValue = 0;
let marginLeftArray = [];

for(let i = 0; i < 4; i++) {
  if (i == 0) {
    marginLeftArray.push(currentValue + '%');
  }  else {
    currentValue = currentValue - intervalPercentage;
    marginLeftArray.push(currentValue + '%');
  }
}
// Dynamic Logic End

function NextTo(event, pageSequence) {
  event.preventDefault();

  // if (pageSequence == 2) {
  //   marginLeft = '-25%'; // index 1
  // } else if (pageSequence == 3) {
  //   marginLeft = '-50%'; // index 2
  // } else if (pageSequence == 4) {
  //   marginLeft = '-75%'; // index 3
  // }


  marginLeft = marginLeftArray[pageSequence - 1];

  slidePage.style.marginLeft = marginLeft;
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
}

function PreviousTo(event, pageSequence) {
  event.preventDefault();

  // if (pageSequence == 1) {
  //   marginLeft = '0%'; // index 0
  // } else if (pageSequence == 2) {
  //   marginLeft = '-25%'; // index 1
  // } else if (pageSequence == 3) {
  //   marginLeft = '-50%'; // index 2
  // }

  marginLeft = marginLeftArray[pageSequence - 1];

  slidePage.style.marginLeft = marginLeft;
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
}

function Submit(event) {
  event.preventDefault();
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function () {
    debugger;
    alert("Your Form Successfully Signed up");
    location.reload();
  }, 800);
}

