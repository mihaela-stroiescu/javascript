$(() => {
    setToggleEvent();
});

const setToggleEvent = () => {
    $('.expand').click(expandAll);
    $('.collapse').click(collapseAll);
    $('.title').click(toggleDescription);
};

function toggleDescription() {
    const titleIcon = $(this).find('.fas');
    const description = $(this).next('.description');

    if (description.hasClass('opened')) {
        description.removeClass('opened');
        description.toggle(1000);
        toggleElement(titleIcon);
        return;
    }

    const icon = $('.opened')
        .prev('.title')
        .find('.fas');
    toggleElement(icon);

    $('.opened').toggle(1000);
    $('.opened').removeClass('opened');

    description.addClass('opened');
    description.toggle(1000);
    toggleElement(titleIcon);
}

const toggleElement = element => {
    element.toggleClass('fa-chevron-down fa-chevron-up');
};

function expandAll() {
    const descriptions = $('.description');
    $.each(descriptions, function (index, element) {
        descriptions.addClass('opened');
        return;
    });

        if (descriptions.hasClass('opened')) {
            descriptions.removeClass('opened');
            descriptions.toggle(1000);
            return;
        };

};

function collapseAll() {
    $(expandAll).removeClass('opened');
};