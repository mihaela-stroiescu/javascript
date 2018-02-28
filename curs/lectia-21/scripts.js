$(() => {
    setToggleEvent();
});

const setToggleEvent = () => {
    $('.title').click(toggleDescription);
};

function toggleDescription() {
    let titleIcon = $(this).find('.fas');
    let description = $(this).next('.description');

    if (description.hasClass('opened')) {
        description.removeClass('opened');
        description.toggle(1000);
        //titleIcon.toggleClass('fa-chevron-down fa-chevron-up');
        toggleElement(titleIcon);
        return;
    }

    let icon = $('.opened')
        .prev('.title')
        .find('.fas');
    toggleElement(icon);
    description.toggle(1000);
    $('.opened').removeClass('opened');

    description.addClass('opened');
    //titleIcon.toggleClass('fa-chevron-down fa-chevron-up');
    toggleElement(titleIcon);
}

const toggleElement = element => {
    element.toggleClass('fa-chevron-down fa-chevron-up');
};
