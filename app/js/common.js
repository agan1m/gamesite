$(function() {

	var box = document.querySelectorAll('.news__box__game');
    console.log(box);
	var myTooltipVision = function (e) {
        var tooltip = e.target.querySelector('.game__tooltip');
        /*console.dir(tooltip);
        console.dir(tooltip.style.left);*/
        var parent = tooltip.parentElement.parentElement;
       /* console.dir(parent);*/
        tooltip.style.left = 0;
       /* if (tooltip.style.left == 0+"px") {
            tooltip.style.left = -999999 + "px";
        }
        else if (tooltip.style.left !== 0+"px") {
            tooltip.style.left = 0;
        }*/
        /*tooltip.classList.toggle('game__tooltip_act');*/


    };
	var myTooltipHide = function (e) {
        var tooltip = e.target.querySelector('.game__tooltip');
        tooltip.style.left = -999999+'px';
    };
    /*box.addEventListener('mouseover', myTooltipVision);
    box.addEventListener('mouseout', myTooltipHide);*/
    for (var i=0; i<box.length; i++) {
        box[i].addEventListener('mouseover', myTooltipVision);
        box[i].addEventListener('mouseout', myTooltipHide)
    }
    /*box.currentTarget.addEventListener('mouseover', myTooltipVision);*/
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
