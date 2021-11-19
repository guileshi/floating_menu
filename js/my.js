var celular;
var tablet;
var pc;

$(window).load(function () {
    if (window.screen.width < 576.98) {

        celular = true;
    } else if (window.screen.width > 767.98 && window.screen.width <= 1024) {

        tablet = true;
    } else if (window.screen.width > 1025) {

    }
});

$('#btn__toggler').click(function(){

    if(!$('.btn__circle').hasClass('opened')){
        $(this).addClass('opened')
        $(this).css("color", "grey")
        $('.--left').animate({
            opacity: 1
        }, 200, function(){
            $('.--top--left').animate({
                opacity: 1
            }, 200, function(){
                $('.--top--right').animate({
                    opacity: 1
                }, 200, function(){
                    $('.--right').animate({
                        opacity: 1,
                    }, 200)
                })
            })
        })
    } else{
        $(this).removeClass('opened')
        $(this).css("color", "#E4B55C")
            $('.--left').animate({
                opacity: 0
            }, 200, function(){
                $('.--top--left').animate({
                    opacity: 0
                }, 200, function(){
                    $('.--top--right').animate({
                        opacity: 0
                    }, 200, function(){
                        $('.--right').animate({
                            opacity: 0,
                        }, 200)
                    })
                })
            })
    }

    // if($('.btn__circle').hasClass('opened')){
    //     $('#btn__toggler').click(function(){
    //         isOpened = true
            
    //     })
    //     console.log("aaaaaaaaaaaaaaaaaaaaaaaa")
    //     $(this).removeClass('opened')
    // }
})
