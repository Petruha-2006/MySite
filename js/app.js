$(document).ready(function() {
    $('.menu-burger-button').click(function(event) {
        $('.menu-burger-button,.header-list,.hello,.explore,body').toggleClass('active');
    });
});

$(document).ready(function() {
    $('li').click(function(event) {
        $('.menu-burger-button,.header-list,.hello,.explore,body').removeClass('active');
    });
});

$(window).scroll(function() {
var windowHeight = $(window).height()
var scroll = $(window).scrollTop();
if(scroll >= windowHeight){
$('header,.menu-burger-button').addClass('fixed');
} else{
$('header,.menu-burger-button').removeClass('fixed');
}
});

$(document).ready(function() {
    $('.menu-burger-button').click(function(event) {
        $('html, body').animate({scrollTop: '0px'}, 200);
    });
});

$(document).ready(function(){
    $("#navbar,.hello-screen-content").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута hre
        var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается як
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1300);
         });
});

$(document).ready(function(){
    $("#navbar").on("click","a", function (event) {
        event.preventDefault();;
        $('a').removeClass('activelink');
        $(this).addClass('activelink');
    });
});