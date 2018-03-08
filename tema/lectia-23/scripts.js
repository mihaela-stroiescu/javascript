$(() => {
    GetNumbers();
});

function ReadInput() {
    var textInput = $('.input').val();
    return textInput;
}

function GetNumbers() {
    $('.button').click(function() {
        ReadInput();
        console.log(ReadInput());
    });
}
