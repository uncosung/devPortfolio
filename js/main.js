$(document).ready(startApp);

function startApp () {
    imageHover();
    scrollTop();
    $('#scroll-up').on('click', () => {
        $('html, body').stop().animate({
            scrollTop:0
        }, 500, 'linear');
        return false
    });
    
}

function imageHover () {
    $('.memory').hover(() => {
        $('.memory-details').toggleClass('hidden');
        $('.memory img').toggleClass('hovered');
    })
    $('.sales').hover(() => {
        $('.sales-details').toggleClass('hidden');
        $('.sales img').toggleClass('hovered');
    })
    $('.tuur').hover(() => {
        $('.tuur-details').toggleClass('hidden');
        $('.tuur img').toggleClass('hovered');
    })
}
function scrollTop () {
    $(this).scrollTop(0);
    var button = $('#scroll-up');
    var timeoutKey = -1;
    $(button).css('display','none')
    $(document).on('scroll', () => {
        if(timeoutKey) {
            window.clearTimeout(timeoutKey);
        }
        timeoutKey = window.setTimeout( () => {
            if($(window).scrollTop() < 100) {
                button.fadeOut();
            }
            else {
                button.fadeIn();
            }
        }, 100);
    })
}
