$(function(){
    $('.top__slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows:false,
    })
});
$(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
    

    $(document).ready(function() {

        //E-mail Ajax Send
        $("form").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                alert("Thank you!");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });
    
    });

$('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
});




// $(document).ready(function(){
//     PopUpHide();
// });
// function PopUpShow(){
//     $("#popup1").show();
// }
// function PopUpHide(){
//     $("#popup1").hide();
// };

