



let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");
let btn3 = document.getElementById("myBtn3");
let btn4 = document.getElementById("myBtn4");



// let span = document.getElementsByClassName("close")[0];





// переменные

//close
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}


// slider


btn.onclick = function() {
  modal.style.display = "block";
}
let close = document.getElementById('close');
let btnclose = document.getElementById('btnclose').onclick = function close() {
modal.style.display = "none";
}
btn1.onclick = function() {
modal.style.display = "block";
}
btn2.onclick = function() {
modal.style.display = "block";
}
btn3.onclick = function() {
modal.style.display = "block";
}
btn4.onclick = function() {
  modal.style.display = "block";
  }

let dots = document.getElementsByClassName('dots-item'),
dotsArea = document.getElementsByClassName('dots-block')[0],
slides = document.getElementsByClassName('slides-items');

slidesIndex = 1;



 let showSlides = function showSlides (n) {
  if( n < 1 ) {
    slidesIndex = slides.length ;
  }else if (n > slides.length ) {
    slideIndex = 1;
  }
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display="none";
  }
  for(let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  slides[slidesIndex -1].style.display ='block';
  dots[slidesIndex -1].classList.add('active');
}
showSlides(slidesIndex);

function plusSlides(n) {
  showSlides(slidesIndex += n);
}
function currentSlides(n) {
  showSlides(slidesIndex = n);
}

dotsArea.onclick = function(e) {
  for(let i =0; i <dots.length +1;i++) {
    if(e.target.classList.contains('dots-item')
    && e.target == dots[i -1]) {
      currentSlides(i);
    }
  }
}

//    function plusSlides(n) {
//   showSlides(slidesIndex+=n);
  
// }

