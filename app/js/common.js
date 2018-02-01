$(function() {

	var box = document.querySelectorAll('.news__box__game');
	var parent = document.querySelector('.news__box');
	var tooltipRight = function (e) {
        var tooltip = e.target.querySelector('.game__tooltip');

        tooltip.style.top = 0;
        tooltip.style.left = 100 + "%";
        var arrow = tooltip.querySelector('.tooltip_arrow');
        arrow.style.cssText = "transform:rotate(-90deg);" +
            "left: -6%;" +
            "top: 2%;";
    };
    var tooltipLeft = function (e) {
        var tooltip = e.target.querySelector('.game__tooltip');

        tooltip.style.top = 0;
        tooltip.style.left = -100 + "%";
         var arrow = tooltip.querySelector('.tooltip_arrow');
         arrow.style.cssText = "transform:rotate(90deg);" +
             "left: 98%;" +
             "top: 2%;";
    };
    var tooltipTop = function (e) {
        var tooltip = e.target.querySelector('.game__tooltip');

        tooltip.style.top = -100+"%";
        tooltip.style.left = 0;
        var arrow = tooltip.querySelector('.tooltip_arrow');
        arrow.style.cssText = "transform:rotate(180deg);" +
            "left: 2%;" +
            "top: 98%;";
    };
    var tooltipBot = function (e) {
        var tooltip = e.target.querySelector('.game__tooltip');
        tooltip.style.top = 100+"%";
        tooltip.style.left = 0;
        var arrow = tooltip.querySelector('.tooltip_arrow');
        arrow.style.cssText =
            "left: 7%;" +
            "top: -6%;";
    };
    var tooltipVision = function (e) {
        var tooltip = e.target.querySelector('.game__tooltip');
        var coord = tooltip.parentElement.getBoundingClientRect();
        var coordParent = parent.getBoundingClientRect();
        if(parent.scrollHeight/2 < tooltip.parentElement.scrollHeight) {
            return tooltipRight(e);
        }
        else if((coord.top) != (coordParent.top)){
            return tooltipTop(e);
        }
        else if((coord.top) == (coordParent.top)){
            return tooltipBot(e);
        }

    };
	var myTooltipHide = function (e) {
        var tooltip = e.target.querySelector('.game__tooltip');
        tooltip.style.left = -999999+'px';
    };

    for (var i=0; i<box.length; i++) {
        box[i].addEventListener('mouseover', tooltipVision);
        box[i].addEventListener('mouseout', myTooltipHide)
    }

    var bgElems = document.querySelectorAll('.promo__games__foto_chose');

    var bgChanger = function (e) {

        for(var i = 0; i<bgElems.length; i++){
            bgElems[i].classList.remove('promo__games__foto_chose_active');
        }
        e.target.classList.add('promo__games__foto_chose_active');
        var promo = document.querySelector('.promo');
        promo.style.backgroundImage = "url("+e.target.previousElementSibling.getAttribute('src')+")";
    };
    for (var i = 0; i<bgElems.length; i++) {
        bgElems[i].addEventListener('click', bgChanger);
    }


});
$(document).ready(function () {
    $('.games__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        adaptiveHeight: true,
        nextArrow: $('.games__arrow_next'),
        prevArrow: $('.games__arrow_prev')

    });
    $('.trailers__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        adaptiveHeight: true,
        nextArrow: $('.trailers__arrow_next'),
        prevArrow: $('.trailers__arrow_prev')
    });
});
var burgerMenu = document.querySelector('.burger-menu');
document.querySelector('.burger').addEventListener('click', function () {
    burgerMenu.classList.toggle('burger-active');
});