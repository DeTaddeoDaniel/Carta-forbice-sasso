const buttonChoise = document.querySelectorAll('.btn-circle')
console.log(buttonChoise)

const choises = ['paper', 'rock', 'scissor']
console.log(choises)

let choise = undefined;
console.log(choise)

let choisePc = undefined;
console.log(choisePc)


const scoreHtml = document.getElementById('score');
let score = 0;

function RandomChoisePc() {
    console.log('-- random choise --');
    var index = Math.floor(Math.random() * (choises.length - 0) ) + 0;
    return choises[index]

}

function updateScore(value) {
    console.log('-- update score --');
    score = score + value;
    scoreHtml.innerText = score;
}

function checkWinner(choise) {

    console.log('-- check winner --');
    
    console.log('choise user: '+ choise)
    
    choisePc = RandomChoisePc()
    console.log('choise pc: '+choisePc)

    if(choise == choisePc){
        console.log('winner round: nobody')
    } else if(
        choise == 'paper' && choisePc == 'rock' ||
        choise == 'rock' && choisePc == 'scissor' ||
        choise == 'scissor' && choisePc == 'paper' 
        ){
            console.log('winner round: user');
            updateScore(3);
    } else {
        console.log('winner round: pc');
        updateScore(-1)
    }
}

function step1() {
    $('.wrap').hide();
    $('.selection').show();
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('-- document ready --');

    $('.wrap').show();
    $('.selection').hide();

    buttonChoise.forEach(button => {
        
        console.log('-- active button '+ button.getAttribute('data-choise') +' --');
        button.addEventListener('click', function f1() {
            
            choise = button.getAttribute('data-choise');
            console.log(choise);
            
            buttonChoise.forEach( (button) => {
                console.log('-- remove button '+ button.getAttribute('data-choise') +' --');
                button.removeEventListener('click',f1 )
            })

            step1();
            checkWinner(choise)
        })
    });
})