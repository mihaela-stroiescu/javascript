

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(min + Math.random() * (max - min));
    return randomNumber;
};
console.log(getRandomNumber(1, 10));

const randomPosition = () => {
    const randomTop = getRandomNumber(0, $('.display').height());
    const randomLeft = getRandomNumber(0, $('.display').width() - $('.fas').width());
    $('.fas').css({ top: randomTop + 'px', left: randomLeft + 'px' });

};

$('#position').click(randomPosition);
