let current = 1;
let marginLeft = '0%';

const slidePage = document.querySelector(".slide-page");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

const marginLeftArray = ['0%','-25%','-50%','-75%'];


function NextTo(event, value) {
  event.preventDefault();

  if (value == 2) {
    marginLeft = '-25%';
  } else if (value == 3) {
    marginLeft = '-50%';
  } else if (value == 4) {
    marginLeft = '-75%';
  }


  slidePage.style.marginLeft = marginLeft;
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
}

function PreviousTo(event, value) {
  event.preventDefault();

  if (value == 1) {
    marginLeft = '0%';
  } else if (value == 2) {
    marginLeft = '-25%';
  } else if (value == 3) {
    marginLeft = '-50%';
  }

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

