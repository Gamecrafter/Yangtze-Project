function next(){
    var currentSlide = $(".active-slide");
    var nextSlide = currentSlide.next();
    var currentDot = $(".active-dot");
    var nextDot = currentDot.next();
    if(nextSlide.length === 0){
        nextSlide = $(".slide").first();
        nextDot = $(".dot").first();
    }
    currentSlide.slideToggle(800).removeClass("active-slide");
    currentDot.removeClass("active-dot");
    nextSlide.slideToggle(800).addClass("active-slide");
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
    currentSlide.slideToggle(800).removeClass("active-slide");
    currentDot.removeClass("active-dot");
    prevSlide.slideToggle(800).addClass("active-slide");
    prevDot.addClass("active-dot");
}
function toggleFullscreen(){
    if(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement){
        if(document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
        else if(document.documentElement.mozRequestFullScreen) document.documentElement.mozRequestFullScreen();
        else if(document.documentElement.webkitRequestFullscreen) document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
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