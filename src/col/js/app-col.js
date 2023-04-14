









// 3D Scroll
let zSpacing = -1500,
		lastPos = zSpacing / 5,
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zVals = []

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
			delta = lastPos - top

	lastPos = top

	frames.forEach(function(n, i) {
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -5.5
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`,
				opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}

window.scrollTo(0, 1)



//-------------------------------------




 //------------------Меню----------------------------------- 



$(document).ready(function() {
    $('.burger').click(function(event){
        $('.menu').toggleClass('menu-active');
        $('.body').toggleClass('hide');
        disableScroll.off();
    });
    

});


$(document).ready(function() {
    $('.collections').mouseover(function(event){
        $('.ul2').css('opacity','1');
        $('.ul2').css('pointer-events','auto');

        $(this).css('color', 'white');
        $(this).addClass('a-hover');

        $('.musems').removeClass('a-hover');
        $('.musems').css('color', '#8F969E');

        $('.vistv').removeClass('a-hover');
        $('.vistv').css('color', '#8F969E');

        $('.posit').removeClass('a-hover');
        $('.posit').css('color', '#8F969E');

        $('.hud').removeClass('a-hover');
        $('.hud').css('color', '#8F969E');

        $('.contacts').removeClass('a-hover');
        $('.contacts').css('color', '#8F969E');
    });

       if (window.innerWidth <= 540) {
        $('.collections').click(function(event){
            $('.ul2_mobile').toggleClass('active');
    
            $(this).css('color', 'white');
            $(this).addClass('a-hover');
    
            $('.musems').removeClass('a-hover');
            $('.musems').css('color', '#8F969E');
    
            $('.vistv').removeClass('a-hover');
            $('.vistv').css('color', '#8F969E');
    
            $('.posit').removeClass('a-hover');
            $('.posit').css('color', '#8F969E');
    
            $('.hud').removeClass('a-hover');
            $('.hud').css('color', '#8F969E');
    
            $('.contacts').removeClass('a-hover');
            $('.contacts').css('color', '#8F969E');
    
        });
       }

    $('.musems').mouseover(function(event){
        $('.ul2').css('opacity','0');
        $('.ul2').css('pointer-events','none');

        $(this).css('color', 'white');
        $(this).addClass('a-hover');

        $('.collections').removeClass('a-hover');
        $('.collections').css('color', '#8F969E');

        $('.vistv').removeClass('a-hover');
        $('.vistv').css('color', '#8F969E');
 
        $('.posit').removeClass('a-hover');
        $('.posit').css('color', '#8F969E');

        $('.hud').removeClass('a-hover');
        $('.hud').css('color', '#8F969E');

        $('.contacts').removeClass('a-hover');
        $('.contacts').css('color', '#8F969E');
        
    });


    $('.vistv').mouseover(function(event){
        $('.ul2').css('opacity','0');
        $('.ul2').css('pointer-events','none');

        $(this).css('color', 'white');
        $(this).addClass('a-hover');

        $('.collections').removeClass('a-hover');
        $('.collections').css('color', '#8F969E');

        $('.musems').removeClass('a-hover');
        $('.musems').css('color', '#8F969E');

        $('.posit').removeClass('a-hover');
        $('.posit').css('color', '#8F969E');

        $('.hud').removeClass('a-hover');
        $('.hud').css('color', '#8F969E');

        $('.contacts').removeClass('a-hover');
        $('.contacts').css('color', '#8F969E');
 
    });

    $('.posit').mouseover(function(event){
        $('.ul2').css('opacity','0');
        $('.ul2').css('pointer-events','none');

        $(this).css('color', 'white');
        $(this).addClass('a-hover');

        $('.collections').removeClass('a-hover');
        $('.collections').css('color', '#8F969E');

        $('.musems').removeClass('a-hover');
        $('.musems').css('color', '#8F969E');

        $('.vistv').removeClass('a-hover');
        $('.vistv').css('color', '#8F969E');

        $('.hud').removeClass('a-hover');
        $('.hud').css('color', '#8F969E');

        $('.contacts').removeClass('a-hover');
        $('.contacts').css('color', '#8F969E');
 
    });

    $('.hud').mouseover(function(event){
        $('.ul2').css('opacity','0');
        $('.ul2').css('pointer-events','none');

        $(this).css('color', 'white');
        $(this).addClass('a-hover');

        $('.collections').removeClass('a-hover');
        $('.collections').css('color', '#8F969E');

        $('.musems').removeClass('a-hover');
        $('.musems').css('color', '#8F969E');

        $('.vistv').removeClass('a-hover');
        $('.vistv').css('color', '#8F969E');

        $('.posit').removeClass('a-hover');
        $('.posit').css('color', '#8F969E');

        $('.contacts').removeClass('a-hover');
        $('.contacts').css('color', '#8F969E');
 
    });

    $('.contacts').mouseover(function(event){
        $('.ul2').css('opacity','0');
        $('.ul2').css('pointer-events','none');

        $(this).css('color', 'white');
        $(this).addClass('a-hover');

        $('.collections').removeClass('a-hover');
        $('.collections').css('color', '#8F969E');

        $('.musems').removeClass('a-hover');
        $('.musems').css('color', '#8F969E');

        $('.vistv').removeClass('a-hover');
        $('.vistv').css('color', '#8F969E');

        $('.posit').removeClass('a-hover');
        $('.posit').css('color', '#8F969E');

        
        $('.hud').removeClass('a-hover');
        $('.hud').css('color', '#8F969E');
 
    });


    // $('.musems').mouseout(function(event){
    //     $('.ul2').css('opacity','0');
    //     $('.ul2').css('pointer-events','none');
    // });
});