$(function() {

	var box = document.querySelectorAll('.news__box__game');
	console.log(box);
	var mytooltip = function (e) {
        var tooltip = e.target.querySelector('.game__tooltip');
        console.dir(tooltip);
        console.dir(tooltip.style.left);
        var parent = tooltip.parentElement.parentElement;
        console.dir(parent);
        if (tooltip.style.left == 0+"px") {
            tooltip.style.left = -999999 + "px";
        }
        else if (tooltip.style.left !== 0+"px") {
            tooltip.style.left = 0;
        }
        /*tooltip.classList.toggle('game__tooltip_act');*/


    };
    for (var i=0; i<box.length; i++) {
        box[i].addEventListener('click', mytooltip);
    }

});
