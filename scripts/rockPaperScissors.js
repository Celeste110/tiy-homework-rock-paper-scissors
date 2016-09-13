// to ensure that the page is in a state where it's ready to be manipulated:
// #1. put our code in a function
// #2. pass that function to $(document).ready();

var counts = [0, 0];

// Shortcut for ready-event method on document object
$(function () {

    $('button').on('click', function () {
        $('#outcome').text(''); // reset text in outcome id attribute
        $('#player').removeClass();
        $('#computer').removeClass();
        $('#outcome').removeClass();
        var personSelection = $(this).val();  // the value of the current click event
        var computerSelection = determineComputerSelection();
        countingDown(function () {
            showCorrectPics(personSelection, computerSelection);
            $('#counter').text(''); // reset text in counter id attribute
        });
    });

});

function showCountDown(countDown) {
    $("#counter").append(countDown + '... ');
}

function countingDown(showPicAction) {
    var countDown = 3;
    showCountDown(countDown); // 3

    var timer = setInterval(function () {
        countDown--;
        if (countDown == 0) {
            showPicAction();
            clearInterval(timer);
        }
        else {
            showCountDown(countDown);
        }
    }, 1000);
}

function determineComputerSelection() {
    var num = Math.floor((Math.random() * 3) + 1)
    switch (num) {

        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}


function showCorrectPics(personSelection, computerSelection) {

    if (personSelection == computerSelection) {
        //change class in html to show pic of rock
        if (personSelection == 'rock') {

            $('#player').addClass('rock');
            $('#computer').addClass('rock');
        }
        //change class in html to show pic of paper
        else if (personSelection == 'paper') {
            $('#player').addClass('paper');
            $('#computer').addClass('paper');
        }
        else {
            //change class in html to show pic of scissors
            $('#player').addClass('scissors');
            $('#computer').addClass('scissors');
        }

        $('#outcome').addClass('tie').text('Tie Game');
    }

    else if (personSelection === 'rock' && computerSelection === 'scissors') {
        $('#player').addClass('rock');
        $('#computer').addClass('scissors');
        //YOU WIN

        $('#outcome').addClass('win').text('You Win');
        counts[0] += 1;
    }

    else if (personSelection === 'rock' && computerSelection === 'paper') {
        // YOU LOSE
        $('#player').addClass('rock');
        $('#computer').addClass('paper');

        $('#outcome').addClass('lose').text('You Lose');
        counts[1] += 1;
    }

    else if (personSelection === 'paper' && computerSelection === 'rock') {
        // YOU WIN
        $('#player').addClass('paper');
        $('#computer').addClass('rock');

        $('#outcome').addClass('win').text('You Win');
        counts[0] += 1;
    }

    else if (personSelection === 'paper' && computerSelection === 'scissors') {
        // YOU LOSE
        $('#player').addClass('paper');
        $('#computer').addClass('scissors');

        $('#outcome').addClass('lose').text('You Lose');
        counts[1] += 1;

    }

    else if (personSelection === 'scissors' && computerSelection === 'rock') {
        // YOU LOSE
        $('#player').addClass('scissors');
        $('#computer').addClass('rock');

        $('#outcome').addClass('lose').text('You Lose');
        counts[1] += 1;

    }

    else if (personSelection === 'scissors' && computerSelection === 'paper') {
        // YOU WIN
        $('#player').addClass('scissors');
        $('#computer').addClass('paper');

        $('#outcome').addClass('win').text('You Win');
        counts[0] += 1;
    }
    updateCount(counts);
}

function updateCount(counts) {
    $('#player').find('.score').text('Player: ' + counts[0]);
    $('#computer').find('.score').text('Computer: ' + counts[1]);
}

