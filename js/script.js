$( function() {
    $( "#dessert" ).selectmenu();

    $( "#kitchen" ).selectmenu();
    $( "#menu" ).selectmenu();
    $( "#level" ).selectmenu();
    $( "#file" ).selectmenu();

} );
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        autoWidth:false,
        smartSpeed:100,
        fluidSpeed: true,
        dragEndSpeed: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

$('.custom1').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
});
})
$('#doctor').on('click',function () {
    $('#modal2').css('display','block');
})
function modal1() {
    Object.assign(document.getElementById('modal1').style,{display:'block',animation:'zoomIn 0.5s'
});
}
$('.close_mod').on('click',function () {
    $('#modal1').css('display','none');
})


$(document).ready(function () {
    $("#reg").submit(function() {
        var form_data = $(this).serialize();
         $.ajax({
             url: 'mail.php',
             type: "POST",
             data: form_data,
             success: function () {
                 alert('Заявка принята!');
                 $('#modal1').css('display','none');
             },
             error: function () {
                 alert("Ошибка,данные не отправлены");
             }
         });
         return false;
    });
   /*$(window).resize(function () {
        if($(window).width() < 780){
            $.ajax('bootdent.php',
                $('#requreHeader').html('<?php require "header_small.php" ?>')
            )};
    });*/
});

