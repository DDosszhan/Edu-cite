

//DARK MODE
$(document).ready(function() {
    var darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    $('#toggleDarkMode').click(function() {
        darkMode = (darkMode === 'enabled') ? 'disabled' : 'enabled';
        localStorage.setItem('darkMode', darkMode);
        toggleDarkMode();
    });

    function toggleDarkMode() {
        if (darkMode === 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }

    function enableDarkMode() {
        $('html').attr('data-bs-theme', 'dark');
    }

    function disableDarkMode() {
        $('html').removeAttr('data-bs-theme');
    }
});



// Animated Text + Jquery
$(document).ready(function(){
    // Hide all paragraphs initially
    $('#text-container p').hide();

    // Loop through each paragraph and fadeIn
    $('#text-container p').each(function(index) {
      $(this).delay(2000 * index).fadeIn(1500);
    });
  });




// Animated appearing flash cards
  $(document).ready(function(){
    $("#socialNetworks .col").hide().each(function(index) {
        $(this).delay(500 * index).fadeIn(1000);
    });
});


//Sound
function playModeChangeSound() {

    var audio = document.getElementById("modeChangeSound");


    if (audio && typeof audio.play === 'function') {
        audio.play();
    }
}



// SEARCH =================================================

$(document).ready(function() {
    $(".flashcard").click(function() {
        $(this).toggleClass("flipped");
    });
});

$(document).ready(function () {
    $("#searchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".flashcard-container").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});


$(document).ready(function () {

    function filterCards(searchQuery) {

        searchQuery = searchQuery.toLowerCase();


        $('.card').each(function () {
            var cardTitle = $(this).find('.card-title').text().toLowerCase();
            var cardText = $(this).find('.card-text').text().toLowerCase();


            if (cardTitle.includes(searchQuery) || cardText.includes(searchQuery)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

   
    $('#searchForm').submit(function (e) {
        e.preventDefault(); 


        var searchQuery = $('#searchInput').val();

     
        filterCards(searchQuery);
    });
});