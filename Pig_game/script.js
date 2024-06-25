'use strict';

//vraiable 
let player1 = 1 ; 
let player2 = 0 ; 
let currentplayer1 = 0 ; 
let currentplayer2 = 0 ; 
let scoreplayer1 = 0 ; 
let scoreplayer2 = 0 ; 


//Html element 
const imagedice = document.querySelector('.dice')  ; 
const role = document.querySelector('.btn--roll') ; 
const hold  = document.querySelector('.btn--hold') ; 
const newgame = document.querySelector('.btn--new') ; 
const current1 = document.getElementById('current--0') ; 
const current2 = document.getElementById('current--1') ; 
const score1 = document.getElementById('score--0') ; 
const score2 = document.getElementById('score--1') ; 
const sec1 = document.querySelector('.player--0') ; 
const sec2 = document.querySelector('.player--1') ; 
let photos = ["dice-1.png" , "dice-2.png" , "dice-3.png" , "dice-4.png" , "dice-5.png",  "dice-6.png"] ; 


// funvtion 
const change_image = function (number) {
    imagedice.src = photos[number - 1]; 
}

const change_score1 = function (number) {
    scoreplayer1 += number ; 
    score1.textContent = scoreplayer1 ; 
}

const change_score2 = function (number) {
    scoreplayer2 += number ; 
    score2.textContent = scoreplayer2 ; 
}

const change_current1 = function (scoreplayer1) {
    currentplayer1 += scoreplayer1 ; 
    scoreplayer1 = 0 ; 
    current1.textContent = currentplayer1 ; 
    score1.textContent = 0 ; 
    sec1.classList.remove('player--active') ; 
    sec2.classList.add('player--active') ;  
}
const change_current2 = function (scoreplayer2) {
    currentplayer2 += scoreplayer2 ; 
    scoreplayer2 = 0 ; 
    current2.textContent = currentplayer2 ;
    score2.textContent = 0 ; 
    sec2.classList.remove('player--active') ; 
    sec1.classList.add('player--active') ; 
}

const switchactive = function () {
    if (!sec1.classList.contains('player--active')) {
        sec1.classList.add('player--active') ;
        sec2.classList.remove('player--active') ; 
    }
       
}



// dynamic 
role.addEventListener('click' , function() {
    if (imagedice.classList.contains('hidden')) 
        imagedice.classList.remove('hidden') ; 
    const number = Math.trunc(Math.random() *6) + 1 ; 
    change_image(number) ; 
    player1 === 1 ? change_score1(number) : change_score2(number) ; 
    
})

hold.addEventListener('click' , function() {
    player1 === 1 ? change_current1(scoreplayer1) : change_current2(scoreplayer2) ; 
    player1 === 1 ? player1 = 0 : player1 = 1 ; 
    player2 === 1 ? player2 = 0 : player2 = 1 ; 
})


newgame.addEventListener('click' , function() {
   imagedice.classList.add('hidden');
   switchactive() ; 
    current1.textContent = 0 ; 
    current2.textContent = 0 ; 
    score1.textContent = 0 ; 
    score2.textContent = 0 ; 
    currentplayer1 = 0  , currentplayer2 = 0 ; 
    scoreplayer1 = 0 , scoreplayer2 = 0 ;  
}
)