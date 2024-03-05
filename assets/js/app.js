$(function() {

     var header = $("#header"),
         introH = $("#intro").innerHeight(),
         scrollOffset = $(window).scrollTop();1
  
 /*fixed header*/         
checkScroll(scrollOffset);
$(window).on("scroll",function () {

scrollOffset = $(this).scrollTop();
checkScroll(scrollOffset);
   
});

  function checkScroll () {
     if( scrollOffset >= introH ) {
       header.addClass("fixed");
     } else {
       header.removeClass("fixed");
     }
  }

  /*smooth scroll*/

  $("[data-scroll]").on("click", function(event){
     event.preventDefault();

     var $this = $(this),
         blockId = $(this).data('scroll'),
         blockOffset = $(blockId).offset().top;

         $this.addClass("active");

         $("html, body").animate({
          scrollTop: blockOffset
         }, 500);
    
  });



});
