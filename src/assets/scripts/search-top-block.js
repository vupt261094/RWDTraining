$(document).ready(function(){
    $('.search-form-top-block').hide();
    $(window).scroll(function () {
        var check = false;
        // set distance user needs to scroll before we start fadeIn
        if ($(this).scrollTop() > 750) {
            if(!check){
                $('.search-form-top-block').show()
                check = true;
            }
        } else {
            $('.search-form-top-block').hide();
            check = false;  
        }
    });
});