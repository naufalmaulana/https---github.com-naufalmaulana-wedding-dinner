AOS.init();

$( document ).ready(function() {
    $('#coverButton').on("click", function(){
        $('#cover').css("top", "-150%");
        $('body').css("overflow", "visible");
    })
});