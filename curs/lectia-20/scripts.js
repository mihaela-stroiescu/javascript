$(() => {
    $('#search').keyup(function() {
        
        filterPhrases($(this).val());
    });

    $('#search').focus();
});

const filterPhrases = word => {
    $('.list-container ul li').map((index, element) => {
        const lihtml = $(element).html().toLowerCase();
    

        if (lihtml.includes(word.toLowerCase())) {
            const pattern = new RegExp(`(${word})`, 'ig');
            const newhtml = $(element).text().replace(pattern, `<span class="highlight">$1</span>`);
            $(element).html(newhtml);
        } else {
            $(element).hide();
        }
        });

};

const phrases = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Curabitur rutrum metus placerat congue euismod.',
    'In pharetra sem hendrerit erat volutpat, at egestas urna vehicula.',
    'Curabitur aliquam diam eu dui elementum, ut efficitur risus scelerisque.',
    'Nunc id tortor porta, aliquet sapien non, dictum metus.',
    'Ut sed sem id nulla feugiat ultricies.'
];

phrases.map(phrase => {
    // var veche const lihtml = '<li>' + phrase + '</li>';
    const lihtml = `<li>${phrase}</li>`;
    $('.list-container ul').append(lihtml);
});



