gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
});


gsap.from('.header', { opacity: 0, duration: 0.7, y: -80});

gsap.to('h1', {opacity: 0, scrollTrigger:{
    trigger: '.block-1',
    start: 'top',
    scrub: true
}});
gsap.to('#block-1-cta', {opacity: 0, scrollTrigger:{
    trigger: '.block-1',
    start: 'top',
    scrub: true
}});


document.querySelectorAll('.img-block1').forEach(node => {
    document.addEventListener('mousemove', e => {
        node.style.cssText = `--move-x: ${e.clientX}px; --move-y:${e.clientY}px`
    });
});