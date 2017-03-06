$(document).ready(function(){

var accordion = $('.details');
var desc = $('.acc-section');

accordion.find(desc).hide(); //hiding all desc



accordion.find('.table-heading').on('click', function(){
    accordion.find("h2").removeClass('open'); // removing +/- from other h2s
    if($(this).next(desc).is(":hidden")){
        $(this).addClass('open'); // changing + and - 
    }
    
    $(this).next(desc).slideToggle(300).siblings('.acc-section:visible').slideUp(300);
})

$(".table-heading:first").trigger("click");




}); //end document ready