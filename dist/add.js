"use strict";gsap.registerPlugin(ScrollTrigger,ScrollSmoother),ScrollSmoother.create({wrapper:".wrapper",content:".content",smooth:1.5,effects:!0});var s=gsap.timeline({defaults:{duration:.7}});s.from(".header",{opacity:0,y:-80}).from(".menu-active",{opacity:0}),s.add((function(){gsap.timeline({}).to("h1",{opacity:0,scrollTrigger:{trigger:".block-1",start:"-300",scrub:!0,pin:!0}}).to("#block-1-cta",{opacity:0,scrollTrigger:{trigger:".block-1",start:"-300",scrub:!0,pin:!0}})})),s.to("#block-1-cta",{opacity:0,display:"none",scrollTrigger:{trigger:".block-1",start:"top",scrub:!0}}),gsap.from(".menu-active",{opacity:0,duration:5}),document.querySelectorAll(".img-block1").forEach((function(s){document.addEventListener("mousemove",(function(o){s.style.cssText="--move-x: ".concat(o.clientX,"px; --move-y:").concat(o.clientY,"px")}))})),document.querySelectorAll(".cursor").forEach((function(s){document.addEventListener("mousemove",(function(o){s.style.cssText="--move-x: ".concat(o.clientX,"px; --move-y:").concat(o.clientY,"px")}))})),$(document).ready((function(){$(".burger").click((function(s){$(".menu").toggleClass("menu-active"),$(".body").toggleClass("hide")}))})),$(document).ready((function(){$(".collections").mouseover((function(s){$(".ul2").css("opacity","1"),$(".ul2").css("pointer-events","auto"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),$(".musems").mouseover((function(s){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".collections").removeClass("a-hover"),$(".collections").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),$(".vistv").mouseover((function(s){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".collections").removeClass("a-hover"),$(".collections").css("color","#8F969E"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),$(".posit").mouseover((function(s){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".collections").removeClass("a-hover"),$(".collections").css("color","#8F969E"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),$(".hud").mouseover((function(s){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".collections").removeClass("a-hover"),$(".collections").css("color","#8F969E"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),$(".contacts").mouseover((function(s){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".collections").removeClass("a-hover"),$(".collections").css("color","#8F969E"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E")}))}));