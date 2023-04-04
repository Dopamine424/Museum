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
        trigger: '#block-1',
        start: '-300',
        pin: '#block-1-h1',
        scrub: true
    }})
    .to('#block-1-cta', {opacity: 0, scrollTrigger:{
        trigger: '#block-1',
        start: '-300',
        pin: '#block-1-cta',
        scrub: true
        
    }});
    
}

// gsap.to('#block-1-h1', {opacity: 0, scrollTrigger:{
//     trigger: '.offer',
//     start: '-500',
//     scrub: true,
//     pin: '#block-1-h1'
// }});
gsap.to('#block-4__h2', {scrollTrigger:{
    trigger: '#block-4',
    start: '0',
    end: '4700',
    scrub: true,
    pin: '#block-4__h2'
}});
gsap.to('#block-4__sec', {opacity: 0, scrollTrigger:{
    trigger: '#block-4',
    start: '2300',
    end: '2400',
    scrub: true,
}});
gsap.to('#block-4__sec', {scrollTrigger:{
    trigger: '#block-4',
    start: '0',
    scrub: true,
    pin: '#block-4__sec'
}});
gsap.to('#block-4__sec2', {opacity: 100, scrollTrigger:{
    trigger: '#block-4',
    start: '2400',
    end: '2600',
    scrub: true,
}});
gsap.to('#block-4__sec2', {scrollTrigger:{
    trigger: '#block-4',
    start: '0',
    scrub: true,
    pin: '#block-4__sec2'
}});


const tl = gsap.timeline({defaults: {duration: .7}});



tl.from('.header', { opacity: 0, y: -80})
    .from('.menu-active',{opacity: 0} )
    //.from('h1', {opacity: 0});

tl.add(h1Animation);


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



// -------------------------------block 2 --------------------------

let block_5_main_title = gsap.utils.toArray('.title-block-5');
let block_5_more_info = gsap.utils.toArray('.item-block-5');
let block_5_info_blocks = gsap.utils.toArray('.info-item-block-5').reverse();




block_5_main_title.forEach(item => {
gsap.fromTo('.first-row-block2', { x: -1000 , opacity: 0}, {
    x: 0, opacity: 1,
    scrollTrigger: {
        trigger: '.first-row-block2',
        // start: '100',
        end:'-300',
        scrub: true,
        
        
    }
    
})
gsap.fromTo('.second-row-block2', { x: 1000 , opacity: 0}, {
    x: 0, opacity: 1,
    scrollTrigger: {
        trigger: '.first-row-block2',
        // start: '100',
        end:'-400',
        scrub: true,
        
    }
    
})



let block2_t = gsap.utils.toArray('.text-elem');



block2_t.forEach(item => {
    gsap.fromTo(item, {y: 150, opacity: 0},
        {
            y:0,
            opacity:1,
            scrollTrigger: {
                trigger: item,
                // trigger: ".text-elem",
                start:'-850',
                end:'-300',
                scrub:true,
                
            }
        }),
        block_5_more_info.forEach(item => {
            gsap.fromTo(item, {x: 150, opacity: 0},
                {
                    x:0,
                    opacity:1,
                    scrollTrigger: {
                        trigger: item,
                        //trigger: ".item-titile-block-5",
                        start:'-250',
                        //end:'-300',
                        scrub:true,
                        stagger:0.25
                    }
                })
        }); 
        block_5_info_blocks.forEach(item => {
            gsap.fromTo(item, {x: -150, opacity: 0},
                {
                    x:0,
                    opacity:1,
                    delay:5,
                    scrollTrigger: {
                        trigger: item,
                        //trigger: ".item-titile-block-5",
                        start:'-850',
                        end:'-300',
                        scrub:true
                    }
                },console.log(item))
        }),'+=2'; 
}); 


// -------------------------------block 3 --------------------------
let block3TriggerStart = 
gsap.to(".block-3", 
{
    scrollTrigger:
    {
        trigger: '.block-3',
        start: 80 - window.innerHeight + "",
        end: window.innerHeight - 280 + "",
        markers: false,
        scrub: true
    },
    y: 600
});
gsap.to(".block-3", 
{
    scrollTrigger:
    {
        trigger: '.block-3',
        start: 80 - window.innerHeight + "",
        end: 780 - window.innerHeight + "",
        markers: false,
        scrub: true
    },
    opacity: 1
});
gsap.set(".block-3-cards", {opacity: 0});
gsap.to(".block-3-cards", 
{
    scrollTrigger:
    {
        trigger: '.block-3',
        start: 480 - window.innerHeight + "",
        end: 980 - window.innerHeight + "",
        scrub: true,
        markers: false
    },
    opacity: 1
});
gsap.to(".block-3-top_block", 
{
    scrollTrigger:
    {
        trigger: '.block-3',
        start: 480 - window.innerHeight + "",
        end: 980 - window.innerHeight + "",
        scrub: true,
        markers: false
    },
    y: -200,
});
gsap.to(".block-3-bottom_block", 
{
    scrollTrigger:
    {
        trigger: '.block-3',
        start: 480 - window.innerHeight + "",
        end: 980 - window.innerHeight + "",
        scrub: true
    },
    y: 205,
});
if (window.innerWidth > 820) {
    gsap.set(".block-3-cta", {y: -100, opacity: 0});
    gsap.to(".block-3-cta", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 480 - window.innerHeight + "",
            end: 980 - window.innerHeight + "",
            scrub: true
        },
        y: 30,
        opacity: 1.5
    });
}


if (window.innerWidth <= 1920 && window.innerWidth > 1600 || window.innerWidth >= 1920) {
    gsap.to(".block-3-text-left", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true,
            markers: false
        },
        x: "-58.5%",
    });
    gsap.to(".block-3-text-right", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true
        },
        x: "33.25%"
    });
}

if (window.innerWidth <= 1600 && window.innerWidth > 1280) {
    gsap.to(".block-3-text-left", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true,
            markers: false
        },
        x: "-59.6%",
    });
    gsap.to(".block-3-text-right", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true
        },
        x: "34.5%"
    });
}

if (window.innerWidth <= 1280 && window.innerWidth > 1170) {
    gsap.to(".block-3-text-left", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true,
            markers: false
        },
        x: "-57.2%",
    });
    gsap.to(".block-3-text-right", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true
        },
        x: "31.5%"
    });
}

if (window.innerWidth <= 1170 && window.innerWidth > 1020) {
    gsap.to(".block-3-text-left", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true,
            markers: false
        },
        x: "-56%",
    });
    gsap.to(".block-3-text-right", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true
        },
        x: "30%"
    });
}

if (window.innerWidth <= 1020 && window.innerWidth > 820) {
    gsap.to(".block-3-text-left", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true,
            markers: false
        },
        x: "-54%",
    });
    gsap.to(".block-3-text-right", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true
        },
        x: "25%"
    });
}

if (window.innerWidth <= 820 && window.innerWidth > 700) {
    gsap.to(".block-3-text-left", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true,
            markers: false
        },
        x: "-51%",
    });
    gsap.to(".block-3-text-right", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true
        },
        x: "21%"
    });
    gsap.set(".block-3-adaptive-cards-card-1", {x: '600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-1",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-1100',
            end: '-100',
            scrub: true,
            markers: false
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-adaptive-cards-card-2", {x: '-600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-2",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-935',
            end: '65',
            scrub: true,
            markers: false
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-cta", {y: -100, opacity: 0});
    gsap.to(".block-3-cta", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: '-435',
            end: '265',
            scrub: true,
            markers: false
        },
        y: 30,
        opacity: 1
    });
}

if (window.innerWidth <= 700 && window.innerWidth > 610) {
    gsap.to(".block-3-text-left", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true,
            markers: false
        },
        x: "-47%",
    });
    gsap.to(".block-3-text-right", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true
        },
        x: "17%"
    });
    gsap.set(".block-3-adaptive-cards-card-1", {x: '600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-1",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-1100',
            end: '-100',
            scrub: true,
            markers: false
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-adaptive-cards-card-2", {x: '-600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-2",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-935',
            end: '65',
            scrub: true,
            markers: false
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-cta", {y: 250, opacity: 0});
    gsap.to(".block-3-cta", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: '50',
            end: '400',
            scrub: true,
            markers: false
        },
        opacity: 1,
        y: 400
    }); 
}

if (window.innerWidth <= 610 && window.innerWidth > 520) {
    gsap.to(".block-3-text-left", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true,
            markers: false
        },
        x: "-45%",
    });
    gsap.to(".block-3-text-right", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true
        },
        x: "13%"
    });
    gsap.set(".block-3-adaptive-cards-card-1-img_adaptive", {x: '600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-1-img_adaptive",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-1000',
            end: '-250',
            scrub: true,
            markers: false
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-adaptive-cards-card-1-text", {x: '-600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-1-text",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-735',
            end: '-150',
            scrub: true,
            markers: false
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-adaptive-cards-card-2-img_adaptive", {x: '600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-2-img_adaptive",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-800',
            end: '150',
            scrub: true,
            markers: false
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-adaptive-cards-card-2-text", {x: '-600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-2-text",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-200',
            end: '350',
            scrub: true,
            markers: true
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-cta", {y: 250, opacity: 0});
    gsap.to(".block-3-cta", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: '50',
            end: '500',
            scrub: true,
            markers: false
        },
        opacity: 1,
        y: 350
    });
}

if (window.innerWidth <= 520 && window.innerWidth > 430) {
    gsap.to(".block-3-text-left", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true,
            markers: false
        },
        x: "-42%",
    });
    gsap.to(".block-3-text-right", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true
        },
        x: "5%"
    });
    gsap.set(".block-3-adaptive-cards-card-1-img_adaptive", {x: '600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-1-img_adaptive",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-1000',
            end: '-250',
            scrub: true,
            markers: false
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-adaptive-cards-card-1-text", {x: '-600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-1-text",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-735',
            end: '-150',
            scrub: true,
            markers: false
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-adaptive-cards-card-2-img_adaptive", {x: '600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-2-img_adaptive",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-800',
            end: '150',
            scrub: true,
            markers: false
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-adaptive-cards-card-2-text", {x: '-600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-2-text",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-200',
            end: '350',
            scrub: true,
            markers: true
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-cta", {y: 250, opacity: 0});
    gsap.to(".block-3-cta", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: '50',
            end: '500',
            scrub: true,
            markers: false
        },
        opacity: 1,
        y: 350
    });
}

if (window.innerWidth <= 430) {
    gsap.to(".block-3-text-left", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true,
            markers: false
        },
        x: "-39%",
    });
    gsap.to(".block-3-text-right", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: 80 - window.innerHeight + "",
            end: 480 - window.innerHeight + "",
            scrub: true
        },
        x: "0%"
    });
    gsap.set(".block-3-adaptive-cards-card-1-img_adaptive", {x: '600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-1-img_adaptive",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-1000',
            end: '-250',
            scrub: true,
            markers: false
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-adaptive-cards-card-1-text", {x: '-600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-1-text",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-735',
            end: '-150',
            scrub: true,
            markers: false
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-adaptive-cards-card-2-img_adaptive", {x: '600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-2-img_adaptive",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-800',
            end: '150',
            scrub: true,
            markers: false
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-adaptive-cards-card-2-text", {x: '-600', opacity: 0});
    gsap.to(".block-3-adaptive-cards-card-2-text",{
        scrollTrigger: 
        {
            trigger: '.block-3',
            start: '-200',
            end: '350',
            scrub: true,
            markers: false
        },
        x: '0',
        opacity: 1
    });
    gsap.set(".block-3-cta", {y: 250, opacity: 0});
    gsap.to(".block-3-cta", 
    {
        scrollTrigger:
        {
            trigger: '.block-3',
            start: '50',
            end: '400',
            scrub: true,
            markers: false
        },
        opacity: 1,
        y: 400
    });
}

// ------------- footer -------------


const footer_logo = document.querySelector('.footer-logo');

gsap.set(".footer-logo",{y:-100,opacity:0})
gsap.to(".footer-logo",{
    y:0,
    opacity:1,
    scrollTrigger:{
        trigger:".footer-logo",
        toggleActions: "restart none none none",
    },
    duration: 1.5,
    scrub:true
})

gsap.set(".nav-footer-item",{x:-100,opacity:0})
gsap.to(".nav-footer-item",{
    x:0,
    opacity:1,
    scrollTrigger:{
        trigger:".nav-footer-item",
        toggleActions: "restart none none none",
    },
    duration: 1,
    scrub:true
})

gsap.set(".ul-foo",{x:100,opacity:0})
gsap.to(".ul-foo",{
    x:0,
    opacity:1,
    scrollTrigger:{
        trigger:".ul-foo",
        toggleActions: "restart none none none",
    },
    duration: 0.7,
    scrub:true
})

gsap.set(".footer-or",{x:-100,opacity:0})
gsap.to(".footer-or",{
    x:0,
    opacity:1,
    scrollTrigger:{
        trigger:".footer-or",
        toggleActions: "restart none none none",
    },
    duration: 0.7,
    scrub:true
})
        })
    // block2_t.forEach(item => {
    //     gsap.fromTo(item, {x: 150, opacity: 0},
    //         {
    //             opacity:1, x: 0,
    //             scrollTrigger: {
    //                 trigger: item,
    //                 start:'-850',
    //                 end:'-100',
    //                 scrub:true
    //             }
    //         })
    // }); 
