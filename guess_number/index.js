// variables 

let target = Math.trunc(Math.random() * 20) + 1 ; 
let score = 20 ; 
let Highscore = 0 ; 
// function 

const apper  = function(message) {
    apper_message.textContent = message ;  
}
const change_score = function (score)  { 
    boxscore.textContent = score ; 
} 
const change_Highscore = function (score) {
    Highscore = Math.trunc(Math.max(score , Highscore)); 
    boxHighscore.textContent = Highscore ; 
}

// html 

const  boxnumber = document.querySelector('.guess') ; 
const check_button = document.querySelector('.check') ; 
const apper_message = document.querySelector('.message') ; 
const boxscore = document.querySelector('.score') ; 
const boxHighscore = document.querySelector('.highscore') ; 
const boxabody  = document.querySelector('body') ; 
const boxagain = document.querySelector('.again') ; 
const boxshownumber = document.querySelector('.number') ; 

check_button.addEventListener('click' , function() {
    const input_gusess = Number(boxnumber.value) ; 
    
    if (!input_gusess) {
        apper('ض.ج دخلو تاني') ; 
        boxabody.style.backgroundColor = 'blue' ; 
    }
    else {
        if (input_gusess === target) {
            apper('جدع يصحبي')  ;  
            change_Highscore(score) ; 
            boxabody.style.backgroundColor = 'red' ; 
            boxshownumber.textContent = input_gusess ; 
        }
        else if (input_gusess > target) {
            apper('هدي شويه يبو الشباب') ; 
            --score ;  
        }
        else {
            apper('اعلي شويه يبو الشباب') ; 
            --score ; 
        }
        change_score(score) ; 
    }
})


boxagain.addEventListener('click' , function() {
    score = 20 ; 
    boxabody.style.backgroundColor = 'black' ; 
    change_score(score) ;  
    boxshownumber.textContent = '?' ; 
    apper ('Start guessing...') ; 
    boxnumber.value = '0' ;  
})
