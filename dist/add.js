"use strict";gsap.registerPlugin(ScrollTrigger,ScrollSmoother),ScrollSmoother.create({wrapper:".wrapper",content:".content",smooth:1.5,effects:!0});gsap.to("#block-4__h2",{scrollTrigger:{trigger:"#block-4",start:"0",end:"4700",scrub:!0,pin:"#block-4__h2"}}),gsap.to("#block-4__sec",{opacity:0,scrollTrigger:{trigger:"#block-4",start:"2300",end:"2400",scrub:!0}}),gsap.to("#block-4__sec",{scrollTrigger:{trigger:"#block-4",start:"0",scrub:!0,pin:"#block-4__sec"}}),gsap.to("#block-4__sec2",{opacity:100,scrollTrigger:{trigger:"#block-4",start:"2400",end:"2600",scrub:!0}}),gsap.to("#block-4__sec2",{scrollTrigger:{trigger:"#block-4",start:"0",scrub:!0,pin:"#block-4__sec2"}});var s=gsap.timeline({defaults:{duration:.7}});s.from(".header",{opacity:0,y:-80}).from(".menu-active",{opacity:0}),s.add((function(){gsap.timeline({}).to("#block-1-h1",{opacity:0,scrollTrigger:{trigger:"#block-1",start:"-300",pin:"#block-1-h1",scrub:!0}}).to("#block-1-cta",{opacity:0,scrollTrigger:{trigger:"#block-1",start:"-300",pin:"#block-1-cta",scrub:!0}})})),gsap.from(".menu-active",{opacity:0,duration:5}),document.querySelectorAll(".img-block1").forEach((function(s){document.addEventListener("mousemove",(function(o){s.style.cssText="--move-x: ".concat(o.clientX,"px; --move-y:").concat(o.clientY,"px")}))})),document.querySelectorAll(".cursor").forEach((function(s){document.addEventListener("mousemove",(function(o){s.style.cssText="--move-x: ".concat(o.clientX,"px; --move-y:").concat(o.clientY,"px")}))})),$(document).ready((function(){$(".burger").click((function(s){$(".menu").toggleClass("menu-active"),$(".body").toggleClass("hide")}))})),$(document).ready((function(){$(".collections").mouseover((function(s){$(".ul2").css("opacity","1"),$(".ul2").css("pointer-events","auto"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),window.innerWidth<=540&&$(".collections").click((function(s){$(".ul2_mobile").toggleClass("active"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),$(".musems").mouseover((function(s){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".collections").removeClass("a-hover"),$(".collections").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),$(".vistv").mouseover((function(s){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".collections").removeClass("a-hover"),$(".collections").css("color","#8F969E"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),$(".posit").mouseover((function(s){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".collections").removeClass("a-hover"),$(".collections").css("color","#8F969E"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),$(".hud").mouseover((function(s){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".collections").removeClass("a-hover"),$(".collections").css("color","#8F969E"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),$(".contacts").mouseover((function(s){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".collections").removeClass("a-hover"),$(".collections").css("color","#8F969E"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E")}))}));

