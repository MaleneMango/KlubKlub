// Fade in pages with class="fade"
$(document).ready(function(){$("div.app-container.fade").hide().fadeIn(400);});

// Toggle class="selected" when voting
$(document).ready(function() {
    $('.vote-option').click(function() {
        $(this).toggleClass('selected');
    });
});
