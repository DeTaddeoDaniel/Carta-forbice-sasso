const buttonChoise = document.querySelectorAll('main .btn-circle')
console.log(buttonChoise)

const choises = ['paper', 'rock', 'scissor']
console.log(choises)

let choise = undefined;
console.log(choise)

let choisePc = undefined;
console.log(choisePc)

let winner = '';
console.log(winner)

const scoreHtml = document.getElementById('score');
let score = 0;

function gameRestart() {
    const buttonChoise = document.querySelectorAll('main .btn-circle')
    let choise = undefined;
    let choisePc = undefined;
    let winner = '';
    let score = 0;
}

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

function checkWinner() {

    console.log('-- check winner --');
    
    console.log('choise user: '+ choise)
    console.log('choise pc: '+ choisePc)

    if(choise == choisePc){
        console.log('winner round: nobody')
        winner = 'nobody'
    } else if(
        choise == 'paper' && choisePc == 'rock' ||
        choise == 'rock' && choisePc == 'scissor' ||
        choise == 'scissor' && choisePc == 'paper' 
        ){
            console.log('winner round: user');
            winner = 'user'
            updateScore(3);
    } else {
        console.log('winner round: pc');
        winner = 'pc'
        updateScore(-1)
    }
}

function step1() {

    console.log('-- step 1 --');

    // img src change
    let andressImg = 'images/icon-'+choise+'.svg';
    console.log(andressImg);
    $('.selection img').attr('src',andressImg);
    
    // remove class older 
    let cl = 'btn-'+ $('.selection button').attr('data-choise');
    console.log('removeClass: '+cl);
    $('.selection div:first-child button').removeClass(cl);

    // add new class
    let cv = 'btn-'+choise;
    console.log('addClass: '+cv);
    $('.selection div:first-child button').addClass(cv);
    
    // change data-choise
    $('.selection button').attr('data-choise', choise);

    // cambia display elementi
    $('.wrap').hide();
    $('.selection').show();

    setTimeout(step2 , 3000);
}

function step2 (){
    console.log('-- step 2 --');

    // scelta cpu 
    choisePc = RandomChoisePc()
    console.log('choise pc: '+choisePc)

    // add img to html
    $('.div-nothing .imageContain').append(document.createElement('img'));

    // imposta img
    let andressImg = 'images/icon-'+choisePc+'.svg'
    console.log(andressImg)
    $('.div-nothing .imageContain img').attr('src', andressImg);
    $('.div-nothing .imageContain img').attr('alt',choisePc);

    // imposta button
    let classeNew = 'btn-'+choisePc
    $('.div-nothing button').addClass(classeNew)
    $('.div-nothing button').removeClass('btn-nothing')
    $('.div-nothing button').attr('data-choise',choisePc);

    setTimeout( step3, 3000);
}

function step3() {
    console.log('-- step 3 --');

    checkWinner()

    console.log(winner)

    if(winner=='nobody'){
        $('#win').text('Same');
    } else if(winner=='pc'){
        $('#win').text('you lost');
        $('.div-nothing button').addClass('winner');
    } else {
        $('#win').text('you win');
        $('.userChoise button').addClass('winner');
    }

    $('.selection .result').show();

}

document.addEventListener('DOMContentLoaded', () => {
    console.log('-- document ready --');
    $('#btn-again').click(function (e) { 
        console.log('-- btn play again --')
        e.preventDefault();
        gameRestart();
        initGame();
    });

    $('button.btn-rules').click(function (e) { 
        console.log('-- btn rules --')
        $('.rules').show(500);
    });

    $('p.closeRules').click(function (e) { 
        console.log('-- btn close rules --')
        $('.rules').hide(500);
    });

    initGame()
})

function initGame() {

    $('.wrap').show();
    $('.selection').hide();
    $('.selection .result').hide();

    // add img to html
    $('.div-nothing .imageContain').empty();

    // imposta button
    $('.div-nothing button').removeClass()
    $('.div-nothing button').addClass('btn-circle btn-nothing')

    buttonChoise.forEach(button => {
        
        console.log('-- active button '+ button.getAttribute('data-choise') +' --');
       $(button).click('click', () => {
            
            choise = button.getAttribute('data-choise');
            console.log(choise);

            $('.winner').removeClass('winner');
            step1()
            
            // buttonChoise.forEach( (button) => {
            //     console.log('-- remove button '+ button.getAttribute('data-choise') +' --');
            // })

        })
    });
}