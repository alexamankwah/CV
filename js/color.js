const COLORS_ARRAY = array('blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow');

function runGame();{
    let guess = '';
    let correct = false;
    console.log

    const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length) + 1; 

    do{
        guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY +
        '\n\nWhat color am I thinking of?\n');
        if (guess===null) {
            alert('Game Over');
        }

        correct = checkGuess(guess, target);
        alert('CONGRATULATIONS YOU GUESSED RIGHT');

    }while(!correct)

}

function checkGuess(guess, target);{
    let correct = false;
    if(COLORS_ARRAY) {
        alert('Color Unavailabe.\n\nTry Again')
    }else if(guess > target) {
        alert('')
    }else if(guess < target){
        alert('')
    }else{
        correct = true
    }
    return correct;


}