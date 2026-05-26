
// popup 1
const menu1 = document.getElementById('menu-inner-flora1');
const popup1 = document.getElementById('popup-flora1');
const closeBtn1 = document.getElementById('popup-flora1-close');

menu1.addEventListener('click', () => {
  popup1.classList.add('active');
});

closeBtn1.addEventListener('click', () => {
  popup1.classList.remove('active');
});


popup1.addEventListener('click', (e) => {
  
  if (e.target === popup1) {
    popup1.classList.remove('active');
  }
});


// popup 2
const menu2 = document.getElementById('menu-inner-flora2');
const popup2 = document.getElementById('popup-flora2');
const closeBtn2 = document.getElementById('popup-flora2-close');

menu2.addEventListener('click', () => {
  popup2.classList.add('active');
});

closeBtn2.addEventListener('click', () => {
  popup2.classList.remove('active');
});


popup2.addEventListener('click', (e) => {
  
  if (e.target === popup2) {
    popup2.classList.remove('active');
  }
});



// popup 2‑2
const open22 = document.getElementById('popup-secondary-2-2');
const popup22 = document.getElementById('popup-flora2-2');
const close22 = document.getElementById('popup-flora2-2-close');

open22.addEventListener('click', () => {
  popup22.classList.add('active');
});

close22.addEventListener('click', () => {
  popup22.classList.remove('active');
});

popup22.addEventListener('click', (e) => {
  if (e.target === popup22) {
    popup22.classList.remove('active');
  }
});




// popup 3
const menu3 = document.getElementById('menu-inner-flora3');
const popup3 = document.getElementById('popup-flora3');
const closeBtn3 = document.getElementById('popup-flora3-close');

menu3.addEventListener('click', () => {
  popup3.classList.add('active');
});

closeBtn3.addEventListener('click', () => {
  popup3.classList.remove('active');
});


popup3.addEventListener('click', (e) => {
  
  if (e.target === popup3) {
    popup3.classList.remove('active');
  }
});


// popup 4
const menu4 = document.getElementById('menu-inner-flora4');
const popup4 = document.getElementById('popup-flora4');
const closeBtn4 = document.getElementById('popup-flora4-close');

menu4.addEventListener('click', () => {
  popup4.classList.add('active');
});

closeBtn4.addEventListener('click', () => {
  popup4.classList.remove('active');
});


popup4.addEventListener('click', (e) => {
  
  if (e.target === popup4) {
    popup4.classList.remove('active');
  }
});



// popup 5
const menu5 = document.getElementById('menu-inner-flora5');
const popup5 = document.getElementById('popup-flora5');
const closeBtn5 = document.getElementById('popup-flora5-close');

menu5.addEventListener('click', () => {
  popup5.classList.add('active');
});

closeBtn5.addEventListener('click', () => {
  popup5.classList.remove('active');
});


popup5.addEventListener('click', (e) => {
  
  if (e.target === popup5) {
    popup5.classList.remove('active');
  }
});





