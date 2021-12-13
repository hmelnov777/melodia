$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $('.counter-up')
    var counterDown = $('.counter-down')
    var FloorPath =  $(".home-image path")
    var modal  = $(".modal")
    var buttonClose = $(".button-close-button")
    var viewFltatsButton = $(".view-flats")
    var Bebra = $(".flats path")
   
    FloorPath.on('mouseover',function(){
         FloorPath.removeClass('current-floor')
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });

  

    FloorPath.on('click',toggleModal);

     buttonClose.on('click', toggleModal);

     viewFltatsButton.on('click',toggleModal)

    counterUp.on("click",function(){
       if(currentFloor < 18){
            currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits:2,useGrouping:false})

         $('.counter').text(usCurrentFloor);
        FloorPath.removeClass('current-floor')
         $(`[data-floor =${usCurrentFloor}]`).toggleClass('current-floor'); 
       }

        
    })

    counterDown.on("click",function(){
       if(currentFloor > 2)
       {
            currentFloor--;
         usCurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits:2,useGrouping:false})

         $('.counter').text(usCurrentFloor);
          FloorPath.removeClass('current-floor')
         $(`[data-floor =${usCurrentFloor}]`).toggleClass('current-floor'); 
       }
    })
    function toggleModal(){
        modal.toggleClass("is-open");
    }
});