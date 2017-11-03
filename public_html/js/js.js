/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

//pour maintenir le footer toujours plus bas
$(document).ready(function () {

    var docHeight = $(window).height();
    var footerHeight = $('#foot').height();
    var footerTop = $('#foot').position().top + footerHeight;

    if (footerTop < docHeight) {
        $('#foot').css('margin-top', 10 + (docHeight - footerTop) + 'px');
    }


    $('[data-toggle="tooltip"]').tooltip();
});