/**************************************************
 *** Pig Game Logics
 ***********************/


var scores, roundScore, activePlayer, gamePlaying;
// Call init function here, as srart position
init();


document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {
        // 1. Random Number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2.Display The number
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.webp';

        // 3. Update the number if score was not 1

        if (dice !== 1) {

            // add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).innerHTML = '<b>' + roundScore + '</b>';

        } else {

            // Next player
            nextPlayer();

        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
        // Add Current score to Global score
        scores[activePlayer] += roundScore;

        // Update the Ui
        document.querySelector('#score-' + activePlayer).innerHTML = '<b>' + scores[activePlayer] + '</b>';
        //document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if the player Won the Game.. Show winners!!!!!!!!
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner !!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        } else {
            // Next player
            nextPlayer();
        }
    }

});

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').innerHTML = '<b>' + 0 + '</b>';
    document.getElementById('current-1').innerHTML = '<b>' + 0 + '</b>';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;


    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').innerHTML = '<b>' + 0 + '</b>';
    document.getElementById('score-1').innerHTML = '<b>' + 0 + '</b>';
    document.getElementById('current-0').innerHTML = '<b>' + 0 + '</b>';
    document.getElementById('current-1').innerHTML = '<b>' + 0 + '</b>';
    document.getElementById('name-0').textContent = 'Player-1';
    document.getElementById('name-1').textContent = 'Player-2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}



//document.querySelector('#current-' + activePlayer).textContent = dice;
//
////document.querySelector('#current-' + activePlayer).innerHTML = '<b>' + dice + '</b>';
//let x = document.querySelector('#score-0').textContent; 
