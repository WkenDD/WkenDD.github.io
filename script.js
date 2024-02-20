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

// Panggil fungsi untuk memulai animasi ketik
type();



//----------------------- popup ------------------------

// Ambil elemen tombol dan popup
var popupBtn = document.getElementById("popup-btn");
var popup = document.getElementById("popup");

// Ketika tombol ditekan, tampilkan popup
popupBtn.onclick = function() {
  popup.style.display = "block";
};

// Ketika pengguna mengklik ikon close, sembunyikan popup
popup.querySelector(".close").onclick = function() {
  popup.style.display = "none";
};

// Ketika pengguna mengklik di luar popup, sembunyikan popup
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

