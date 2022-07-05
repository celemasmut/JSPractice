const player1={
    score : 0,
    button : document.querySelector('#p1Button'),
    display : document.querySelector('#player1'),
}
const player2={
    score : 0,
    button : document.querySelector('#p2Button'),
    display : document.querySelector('#player2'),
}

const resetButton = document.querySelector('#reset');
const winningScoreSelector = document.querySelector('#playTo');

let isGameOver = false; 

let winningScore = 3;

function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1; 
        if(player.score === winningScore){
            isGameOver= true;
            player.display.classList.add('has-text-primary');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

player1.button.addEventListener('click', function(){
   updateScores(player1,player2);
})

player2.button.addEventListener('click', function(){
    updateScores(player2,player1);

})

function reset(){
    isGameOver = false; 

    for(let player of [player1,player2]){
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('has-text-primary','has-text-danger');
        player.button.disabled = false;
    }
}


resetButton.addEventListener('click', reset );

winningScoreSelector.addEventListener('change', function(){

    winningScore = parseInt(this.value);
    reset();

})