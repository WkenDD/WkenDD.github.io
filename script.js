// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}


// ------------------- animasi text ketikan -----------------


// Teks yang akan diiketik
const textToType = "Hai, aku Grehista";
// Waktu delay antara setiap karakter (dalam milidetik)
const typeSpeed = 100;

let index = 0;

function type() {
  if (index < textToType.length) {
    document.getElementById('typed-text').innerHTML += textToType.charAt(index);
    index++;
    setTimeout(type, typeSpeed);
  }
}


type();



//----------------------- popup ------------------------

function openPopup() {
  const popup = document.querySelector('.popup');
  const overlay = document.querySelector('.overlay');
  popup.style.display = 'block';
  overlay.style.display = 'block';
  
  setTimeout(() => {
      popup.style.transform = 'translate(-50%, -50%) scale(1)';
      popup.style.opacity = '1';
      overlay.style.opacity = '1';
  }, 10); // Small delay to allow transition

  document.body.classList.add('show-popup');
}

function closePopup() {
  const popup = document.querySelector('.popup');
  const overlay = document.querySelector('.overlay');
  
  popup.style.transform = 'translate(-50%, -50%) scale(0)';
  popup.style.opacity = '0';
  overlay.style.opacity = '0';
  
  setTimeout(() => {
      popup.style.display = 'none';
      overlay.style.display = 'none';
  }, 300); // Wait for the transition to end

  document.body.classList.remove('show-popup');
}






//------------------------ popup ios

function showPopup2() {
  document.getElementById('popup2-background').classList.add('show');
  document.querySelector('.popup2').classList.add('show');
}

function closePopup2() {
  var popup2 = document.querySelector('.popup2');
  popup2.classList.remove('show');
  popup2.classList.add('hide');

  setTimeout(function () {
    document.getElementById('popup2-background').classList.remove('show');
    popup2.classList.remove('hide');
  }, 500);
}

function changeMode(buttonIdToDisable, buttonIdToEnable) {
  var buttonToDisable = document.getElementById(buttonIdToDisable);
  var buttonToEnable = document.getElementById(buttonIdToEnable);
  buttonToDisable.classList.add('disabled');
  buttonToEnable.classList.remove('disabled');

  // Add red text to the disabled button
  buttonToDisable.classList.add('red-text');
  buttonToEnable.classList.remove('red-text');
}





/*------------------------------- animation untuk navbar -----------------------------*/






document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector('.menu-btn');
  const cancelBtn = document.querySelector('.cancel-btn');
  const navbar = document.querySelector('.navbar');
  const menu = document.querySelector('.menu');

  menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
    navbar.classList.add('active');

    const links = menu.querySelectorAll('a');
    links.forEach((link, index) => {
      link.style.animationDelay = `${0.5 + index * 0.1}s`; // Menambahkan delay untuk setiap link
      link.style.animationName = 'slideInLeft'; // Menambahkan nama animasi
    });
  });

  cancelBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    navbar.classList.remove('active');
    const links = menu.querySelectorAll('a');
    links.forEach((link) => {
      link.style.animationName = 'none';
      link.style.opacity = '0'; 
    });
  });
});






/*------------------------- card --------------------------------------*/

