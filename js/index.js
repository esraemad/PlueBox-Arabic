$(document).ready(function()
{
    
    rtl: false;
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

    
/*** strat vedio option ***/
$('.anothrvido').click(function(){
    
    $('.vjs-big-play-button').hide();
});
      
/*** end vedio option ***/

    
    /***************************** strat change color  ***********************/

/*** strat color option  display ***/

$('.change-color').click (function(){
    $('.color-op').fadeToggle();
});

/*** end color option  display ***/

    

/*** strat color ul  ***/

$('.color-op ul li')
    .eq(0).css('background-color','#E74A41').end()
    .eq(1).css('background-color','#26a0da').end()
    .eq(2).css('background-color','#FDC614').end()
    .eq(3).css('background-color','#BE5869');
/*** end color ul  ***/

    
    
$('.color-op ul li').click(function(){
     $('link[href*="them"]').attr('href',$(this).attr("data-value"));
});

});

/******************end change color ****************************/



/****************************start tabs ***********************************/


$('.tab-list li').click(function (){
    $(this).addClass('active').siblings().removeClass('active');
    $('.contect-list > div').hide();
   $( $(this).data('content')).show();
    
})

$('.anothrvido1').click(function(){
    
    $('.vjs-big-play-button').hide();
});
   

$('.anothrvido2').click(function(){
    
    $('.vjs-big-play-button').hide();
});
    

/*****************************end tabs ********************************/