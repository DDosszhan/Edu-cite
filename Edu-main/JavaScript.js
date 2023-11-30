

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
    $('#text-container p').hide();
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





// popup contact form
document.getElementById("contactForm").addEventListener("submit", function (event) {

    event.preventDefault();

    $('#myModal').modal('show');
});

$(document).ready(function () {
    $(".container p").each(function (index) {
        $(this).delay(500 * index).slideDown(1000);
    });
});



//Sound
function playModeChangeSound() {

    var audio = document.getElementById("modeChangeSound");


    if (audio && typeof audio.play === 'function') {
        audio.play();
    }
}




