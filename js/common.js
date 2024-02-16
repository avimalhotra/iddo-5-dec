$(function(){
    $(".wrap-5 .btn").click(function(){
        $(".wrap-5 .btn").removeClass("active");
        $(this).addClass("active");
        
        if( $(this).text()=="All"){
            $(".wrap-5 .tabs .col-4").fadeIn();
        }
        else if( $(this).text()=="Website"){
            $(".wrap-5 .tabs .col-4").fadeOut(0);
            $(".wrap-5 .tabs .col-4:nth-child(1),.wrap-5 .tabs .col-4:nth-child(2),.wrap-5 .tabs .col-4:nth-child(3)").fadeIn();
        }
        else if( $(this).text()=="Branding"){
            $(".wrap-5 .tabs .col-4").fadeOut(0);
            $(".wrap-5 .tabs .col-4:nth-child(4),.wrap-5 .tabs .col-4:nth-child(5),.wrap-5 .tabs .col-4:nth-child(6)").fadeIn();
        }
    });

    $(".accordion a").on("click",function(e){
        e.preventDefault();
        if( $(this).hasClass("active")==false ){
          $(".accordion a").removeClass("active");
          $(".accordion p").slideUp();
          $(this).toggleClass("active");
          $(this).next("p").slideToggle();
        }
    });
    
    $(".top").on("click",function(){
        $("body,html").animate({scrollTop:0})
    });

    $(".btn-mob").on("click",function(){
        $(".collapse").slideToggle();
    });


    if( screen.width<768){
        $("nav a").click(function(){
            $(".collapse").slideUp();
        })
    }



    $(".signup").click(function(){
        $("body").append(`<div class="overlay"></div>`);
        $("body").append(`<div class="popup"></div>`);
        $("body .popup").append( $('.popupform').html() );
        $("body .popup input:first").focus();

        $(".popup, .close").click(function(){
            $(".popup, .overlay").remove();
        })
    });


    $(".reviews").bxSlider({
        auto:true,
        controls:false,
        pause:5000
    });


});