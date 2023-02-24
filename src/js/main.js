gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
});


let h1Animation = () => {
    const tlh = gsap.timeline({});
    tlh.to('#block-1-h1', {opacity: 0, scrollTrigger:{
        trigger: '.block-1',
        start: '-300',
        pin: '#block-1-h1',
        scrub: true
    }})
    .to('#block-1-cta', {opacity: 0, scrollTrigger:{
        trigger: '.block-1',
        start: '-300',
        scrub: true,
        pin: '#block-1-cta'
        
    }});
    
}

// gsap.to('#block-1-h1', {opacity: 0, scrollTrigger:{
//     trigger: '.offer',
//     start: '-500',
//     scrub: true,
//     pin: '#block-1-h1'
// }});

// gsap.to('#block-1-cta', {opacity: 0, scrollTrigger:{
//     trigger: '.block-1',
//     start: '-300',
//     scrub: true,
//     pin: '#block-1-cta'
// }});


const tl = gsap.timeline({defaults: {duration: .7}});



tl.from('.header', { opacity: 0, y: -80})
    .from('.menu-active',{opacity: 0} )
    //.from('h1', {opacity: 0});

tl.add(h1Animation);

tl.to('#block-1-cta', {opacity: 0, display: 'none', scrollTrigger:{
    trigger: '.block-1',
    start: 'top',
    scrub: true
}});

gsap.from('.menu-active', {opacity: 0, duration: 5});


document.querySelectorAll('.img-block1').forEach(node => {
    document.addEventListener('mousemove', e => {
        node.style.cssText = `--move-x: ${e.clientX}px; --move-y:${e.clientY}px`
    });
});

document.querySelectorAll('.cursor').forEach(node => {
    document.addEventListener('mousemove', e => {
        node.style.cssText = `--move-x: ${e.clientX}px; --move-y:${e.clientY}px`
    });
});




 //------------------Меню----------------------------------- 



$(document).ready(function() {
    $('.burger').click(function(event){
        $('.menu').toggleClass('menu-active');
        $('.body').toggleClass('hide');
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



// -------------------------------block 2 --------------------------

