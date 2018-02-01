$(function () {
    for (j = 0; j < 10; j++) {
        $('.buttons').append('<div class="button">' + String.fromCharCode(48 + j) + '</div>');

    }

    for (i = 0; i < 26; i++) {
        $('.buttons').append('<div class="button">' + String.fromCharCode(65 + i) + '</div>');

    }

    $('.buttons').append('<div class="button large">&nbsp;</div>');
    $('.buttons').append('<div class="button large">BS</div>');

    createButtonEvents();
});

function createButtonEvents() {
    $('.button').map((index, element) => {
        $(element).click(function () {
            buttonClicked($(this));
        });
    });
}

function buttonClicked(sender) {
    console.log($(sender).text());
    let buttonText = sender.text();

    if (buttonText != 'BS') {
        appendToDisplay(buttonText);
    } else {
        removeLastCharFromDisplay();
        return;   
    }
       
    function appendToDisplay(char) {
        $('.input').append(char);
    }

    function removeLastCharFromDisplay() {
        let displayText = $('.input').text();
        let newText = displayText.substring(0, displayText.length - 1);
        $('.input').text(newText);
    }
}  

