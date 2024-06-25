'use strict' ; 


// variable 
const sumbles = document.querySelectorAll('.show-modal') ; 
const pragraph = document.querySelector('.modal') ; 
const closebuttom = document.querySelector('.close-modal') ; 
const overlabel = document.querySelector('.overlay') ;  

//function 

const open = function () {
    pragraph.classList.remove('hidden') ;  
    overlabel.classList.remove('hidden') ; 
}

const close = function() {
    pragraph.classList.add('hidden') ;  
    overlabel.classList.add('hidden') ;
}

for (let i = 0 ; i < sumbles.length ; ++i)
    sumbles[i].addEventListener('click' , open) 

    closebuttom.addEventListener('click' , close) 

document.addEventListener('keydown' , function(e) {
    if (e.key === 'Escape') {
        if (!pragraph.classList.contains('hidden')){
            close() ; 
        } 
    }
}) ; 