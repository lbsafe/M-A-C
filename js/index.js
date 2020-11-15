$(document).ready(function(){
    headerChange();
    menu();
    imgChange();
    widthChange();
    imgAlign();
    menuScroll();
    menuScroll2();
    mainGif();
    lipShow();
    imgMove();
    tabUI();
    slider();
});
function headerChange(){
    $(document).scroll(function(){
        if($(window).scrollTop() != 0){
            $('header').addClass('headerChange');
        }else{
            $('header').removeClass('headerChange');
        }
    });
}
function menu(){
    $('header div label').on('click', function(){
        $(this).toggleClass('active');
        $('.menuArea').toggleClass('visible');
        $('header > div h1 a').toggleClass('active');
        if($(this).hasClass('active')){
            $('header > div input[id="menuButton"]+label span:first-of-type').text('B');
            $('header > div input[id="menuButton"]+label span:nth-of-type(2)').text('A').css('margin-left','1px');
            $('header > div input[id="menuButton"]+label span:nth-of-type(3)').text('C').css('margin-left','1px');
            $('header > div input[id="menuButton"]+label span:last-of-type').text('K').css('margin-left','1px');
        }else{
            $('header > div input[id="menuButton"]+label span:first-of-type').text('M');
            $('header > div input[id="menuButton"]+label span:nth-of-type(2)').text('E').css('margin-left','0px');
            $('header > div input[id="menuButton"]+label span:nth-of-type(3)').text('N').css('margin-left','0px');
            $('header > div input[id="menuButton"]+label span:last-of-type').text('U').css('margin-left','0px');
        }
        $('header').removeClass('headerChange');
    });
}
function menuScroll(){
    $('.menuArea').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation(); 
        return false;
        });
}
function menuScroll2(){
    $('header').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation(); 
        return false;
        });
}
function imgChange(){	
    $("div.menuArea nav.menuPage ul li:first-of-type").mouseenter(function(){
        $('div.menuArea nav.menuPage').css({
            "background-image": "url('/../images/menu_01.jpg')",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat"
        });
    });
    $("div.menuArea nav.menuPage ul li:nth-of-type(2)").mouseenter(function(){
        $('div.menuArea nav.menuPage').css({
            "background-image": "url('/../images/menu_02.jpg')",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat"
        });
    });
    $("div.menuArea nav.menuPage ul li:last-of-type").mouseenter(function(){
        $('div.menuArea nav.menuPage').css({
            "background-image": "url('/../images/menu_03.jpg')",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat"
        });
    });
}
function widthChange(){
    $(".faceArea ul li").click(function(e){
        if($(window).width() >= 768){
            $except = $(this);
            $except.css('width','40%');
            $except.addClass('active');
            $(".faceArea ul li").not($except).css('width', '30%');
            $(".faceArea ul li").not($except).removeClass('active');
        }
    });
}
function imgAlign(){
    $(".alignMix").click(function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(".eyesArea div:last-of-type ul li:nth-of-type(2)").css({
                "left": "19.1875vw"
            });
            $(".eyesArea div:last-of-type ul li:nth-of-type(3)").css({
                "top": "19.323vw"
            });
            $(".eyesArea div:last-of-type ul li:last-of-type").css({
                "left": "19.1875vw",
                "top": "19.323vw"
            });
        }else{
            $(".eyesArea div:last-of-type ul li:nth-of-type(2)").css({
                "left": "0vw"
            });
            $(".eyesArea div:last-of-type ul li:nth-of-type(3)").css({
                "top": "0vw"
            });
            $(".eyesArea div:last-of-type ul li:last-of-type").css({
                "left": "0vw",
                "top": "0vw"
            });
        }
    });
}
function mainGif(){
    var currentIndex = 0;
    var logos = ["mac_main01.jpg","mac_main02.jpg","mac_main03.jpg","mac_main04.jpg","mac_main05.jpg"]; //? 이미지 파일 배열
    var $banner = null;
    
    $(document).ready(function(){
        init();
        swap();
        setInterval(swap,700);
    });
    function init(){
        $banner = $(".banner");
    }
    function swap(){
        var imgName = "images/"+ logos[currentIndex];
        $(".mainArea div img").attr("src", imgName);
        currentIndex ++;
        reset();
    }
    function reset(){
        if(currentIndex == logos.length){
            currentIndex = 0;
        }
    }
}
function lipShow(){
$(document).scroll(function(){
    if($(window).width() < 1750){
        $('.lipArea > div ul li').css({
            "transform": 'translateX(0px)',
            "opacity": '1'
        });
    }
        show = $(this).scrollTop();
        if(show > "1900"){
            $('.lipArea > div ul li:first-of-type').css({
                "transform": 'translateX(0px)',
                "opacity": '1'
            });
        }
        if(show > "2400"){
            $('.lipArea > div ul li:nth-of-type(2)').css({
                "transform": 'translateX(0px)',
                "opacity": '1'
            });
        }
        if(show > "2700"){
            $('.lipArea > div ul li:last-of-type').css({
                "transform": 'translateX(0px)',
                "opacity": '1'
            });
        }
    });
}
function imgMove(){
    $("div.box").on('mousemove',function(e){
        if($(window).width() >= 1367){
            var firstx = -e.clientX/15+"px ";
            var firsty = -e.clientY/15+"px";
            var secondx = -e.clientX/35+"px ";
            var secondy = -e.clientY/35+"px";
            var thirdx = -e.clientX/80+"px ";
            var thirdy = -e.clientY/80+"px";
            var fourthx = -e.clientX/40+"px ";
            var fourthy = -e.clientY/40+"px";
            var fifthx = -e.clientX/20+"px ";
            var fifthy = -e.clientY/20+"px";
            var sixthx = -e.clientX/60+"px ";
            var sixthy = -e.clientY/60+"px";
            $("div.box img:first-of-type").css("transform", "translate("+firstx+","+firsty+")");
            $("div.box img:nth-of-type(2)").css("transform", "translate("+secondx+","+secondy+")");
            $("div.box img:nth-of-type(3)").css("transform", "translate("+thirdx+","+thirdy+")");
            $("div.box img:nth-of-type(4)").css("transform", "translate("+fourthx+","+fourthy+")");
            $("div.box img:nth-of-type(5)").css("transform", "translate("+fifthx+","+fifthy+")");
            $("div.box img:last-of-type").css("transform", "translate("+sixthx+","+sixthy+")");
        }
    });
}
function tabUI(){
    $(".tabMenu li").click(function(){
        var activeTab = $(this).attr("data-tabNumb");
        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");
        $(".tabPage").removeClass("activated");
        $("#"+activeTab).addClass("activated");
    });
}
function slider(){
    var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        
        loop: true,
        spaceBetween: 1,
        autoHeight: true
    });
}