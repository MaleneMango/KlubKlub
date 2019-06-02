// Fade in pages with class="fade"
$(document).ready(function(){$("div.app-container.fade").hide().fadeIn(400);});

// Toggle class="selected" when voting
$(document).ready(function() {
    $('.vote-option').click(function() {
        $(this).toggleClass('selected');
    });
});

// Link to random prize
var sites = [
        'gift1.html',
        'gift2.html',
        'gift3.html',
        'nogift.html',
        'nogift.html',
        'nogift.html',
        'nogift.html',
    ];

function grabGift() {
    $.playSound("media/audio/whoosh.ogg"); // Sound effect
   setTimeout(function(){
     location.href = "spil-pakke.html";
   }, 500);
}

function randomSite() {
    $.playSound("media/audio/open-gift.ogg"); // Sound effect
   setTimeout(function(){
     var i = parseInt(Math.random() * sites.length);
     location.href = sites[i];
   }, 2500);
}
