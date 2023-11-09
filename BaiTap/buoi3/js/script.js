$('.btn-open-sidebar').on('click', function(){
    if($('nav').css('left') == '-320px'){
        $('nav').css('left', '0px');
    } else {
        $('nav').css('left', '-320px');
    }
});

$(document).on('mouseup', function(event){
    var nav = $('nav');
    if (!nav.is(event.target) && nav.has(event.target).length === 0){
        nav.css('left', '-320px');
    }
});