function next(){
    var currentSlide = $(".active-slide");
    var nextSlide = currentSlide.next();
    var currentDot = $(".active-dot");
    var nextDot = currentDot.next();
    if(nextSlide.length === 0){
        nextSlide = $(".slide").first();
        nextDot = $(".dot").first();
    }
    currentSlide.removeClass("active-slide animated slideInUp");
    currentDot.removeClass("active-dot");
    nextSlide.addClass("active-slide animated slideInUp");
    nextDot.addClass("active-dot");
}
function prev(){
    var currentSlide = $(".active-slide");
    var prevSlide = currentSlide.prev();
    var currentDot = $(".active-dot");
    var prevDot = currentDot.prev();
    if(prevSlide.length === 0){
        prevSlide = $(".slide").last();
        prevDot = $(".dot").last();
    }
    currentSlide.removeClass("active-slide animated slideInDown");
    currentDot.removeClass("active-dot");
    prevSlide.addClass("active-slide animated slideInDown");
    prevDot.addClass("active-dot");
}
function toggleFullscreen(){
    if(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement){
        var doc = document.documentElement;
        if(doc.requestFullscreen) doc.requestFullscreen();
        else if(doc.mozRequestFullScreen) doc.mozRequestFullScreen();
        else if(doc.webkitRequestFullscreen) doc.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
    else{
        if(document.cancelFullScreen) document.cancelFullScreen();
        else if(document.mozCancelFullScreen) document.mozCancelFullScreen();
        else if(document.webkitCancelFullScreen) document.webkitCancelFullScreen();
    }
}
function playSlideshow(){
    setInterval(function(){
        next();
    }, 10000);
}
$(document).ready(function(){
    $(".arrow-next").click(function(){
        next();
    });
    $(".arrow-prev").click(function(){
        prev();
    });
    $(document).keydown(function(event){
        switch(event.keyCode){
            case 8: //Backspace key
            case 37: //Left arrow key
                prev();
                break;
            case 32: //Spacebar
            case 39: //Right arrow key
                next();
                break;
        }
    });
});