$(document).ready(function() {
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    // For adding new todo task
    $('#inp').keypress(function(event) {
        const todoText = $(this).val();
        if (event.which === 13 && todoText.trim() !== "") {
            $('#list').append(`<li><span> x </span>${todoText}</li>`);
            $(this).val(''); // Clear the input
        }
    });

    $('ul').on('click', 'span', function(event) {
        event.stopPropagation();
        $(this).parent().fadeOut(function() {
            $(this).remove();
        });
    });
});

$('.add').click(function(){
    $('#inp').fadeToggle();
})
