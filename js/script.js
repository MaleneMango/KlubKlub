// Fade in pages with class="fade"
$(document).ready(function(){$("div.app-container.fade").hide().fadeIn(400);});

// Toggle class="selected" when voting
$(document).ready(function() {
    $('.vote-option').click(function() {
        $(this).toggleClass('selected');
    });
});

var sites = [
        'gift1.html',
        'gift2.html',
        'gift3.html',
        'nogift1.html',
        'nogift2.html',
    ];

              function randomSite() {
          var i = parseInt(Math.random() * sites.length);
          location.href = sites[i];
      }
