gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
});


let h1Animation = () => {
    const tlh = gsap.timeline({defaults: { duration: .7}});
    tlh.to('h1', {opacity: 0, scrollTrigger:{
        trigger: '.block-1',
        start: 'top',
        scrub: true
    }});
}


const tl = gsap.timeline({defaults: {duration: .7}});



tl.from('.header', { opacity: 0, duration: 0.7, y: -80});

tl.from('.menu-active',{opacity: 0, duration: 0.7} );



tl.from('h1', { opacity: 0, display: 'none'})
.add(h1Animation);

tl.to('#block-1-cta', {opacity: 0, display: 'none', scrollTrigger:{
    trigger: '.block-1',
    start: 'top',
    scrub: true
}});


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
    });
});


$(document).ready(function() {
    $('.collections').mouseover(function(event){
        $('.ul2').css('opacity','1');
        $('.ul2').css('pointer-events','auto');
    });

    $('.musems').mouseover(function(event){
        $('.ul2').css('opacity','0');
        $('.ul2').css('pointer-events','none');
    });

    // $('.musems').mouseout(function(event){
    //     $('.ul2').css('opacity','0');
    //     $('.ul2').css('pointer-events','none');
    // });
});



// -------------------------------block 2 --------------------------

