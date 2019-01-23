// $(document).ready(() => {
//     initSlick();
      
// });
// function initSlick(){
//     $('.single-item').slick({
//         dots: false,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 2,
//         adaptiveHeight: true,
        
//         responsive: [
//             {
//                 breakpoint: 1920,
//                 settings: "unslick"
//             },
//             {
//               breakpoint: 1200,
//               settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1
//               }
//             },
//             {
//               breakpoint: 992,
//               settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1
//               }
//             }
//           ]
//       });
// }
  
$isSlickExist1 = false;
$isSlickExist2 = false;
function greenSlider(){  
    if($(window).width() <= 1199){
        
        if($(window).width() >= 756){
            $(".single-item").slick({
                dots: false,
                infinite: true,
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1
            });
        }else if($(window).width() < 756){;
            $(".single-item").slick({
                dots: false,
                infinite: true,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            })
        }
        
        $isSlickExist1 = true;
    } else if($(window).width() > 1200){
        if($isSlickExist1){
            $('.single-item').slick('unslick');
            $isSlickExist1 = false;
        }
    } 
};
function greenSlider1(){  
    if($(window).width() <= 1199){
        
        if($(window).width() >= 756){
            $(".single-item-1").slick({
                dots: false,
                infinite: true,
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1
            });
        }else if($(window).width() < 756){;
            $(".single-item-1").slick({
                dots: false,
                infinite: true,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            })
        }
        
        $isSlickExist2 = true;
    } else if($(window).width() > 1200){
        if($isSlickExist2){
            $('.single-item-1').slick('unslick');
            $isSlickExist2 = false;
        }
    } 
};

$(document).ready(function(){
    greenSlider();
    greenSlider1();
});
$(window).on('resize', function(){
    greenSlider();
    greenSlider1();
});