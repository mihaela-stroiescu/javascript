
function getRandomNumber(min, max) {
    const randomNumber = Math.floor(min + Math.random() * (max - min));
    return randomNumber;
};

const randomPosition = () => {
    const randomTop = getRandomNumber(0, $('.display').height() - $('.fas').height());
    const randomLeft = getRandomNumber(0, $('.display').width() - $('.fas').width());
    $('.fas').css({ top: randomTop + 'px', left: randomLeft + 'px' });

};

$('#position').click(randomPosition);

const randomColor = () => {
    const red = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    //return $('.fas').css({ color: 'rgb(' +  red  + ', ' +  green + ', ' +  blue  + ')'});
    return $('.fas').css({ color: `rgb(${red}, ${green}, ${blue})`});
};

$('#color').click(randomColor);

const randomSize = () => {
    const fontSize = getRandomNumber(10, 50);
    $('.fas').css({'font-size': fontSize + 'px'});
    return;
};

$('#size').click(randomSize);



