function loco(){
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()



var page1content = document.querySelector(".page1-content")
var cursor = document.querySelector(".cursor")


function cursorreel(){
page1content.addEventListener("mousemove",function(dets){

    gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
})
})



page1content.addEventListener("mouseenter",function(dets){

    gsap.to(cursor,{
    
    opacity:1,
    scale:1
})
})


page1content.addEventListener("mouseleave",function(dets){
 
    gsap.to(cursor,{
    
   opacity:0,
   scale:0,
})
})


}

cursorreel();



function headlinegsap(){
gsap.from(".page1-content h1 ",{
y:200,
opacity:0,
duration:1,

})

gsap.from(".page1-content h1 span ",{
y:70,
stagger:0.2,
opacity:0,
duration:0.8,



})
}

headlinegsap()




function page2animate(){
gsap.from(".page2 .tareef h3 span",{
    y:100,
  stagger:0.5,
duration:0.4,
opacity:0,

    scrollTrigger:{
      trigger:".page2",
      scroller:".main",
    
      scrub:1,
      start:"top 65%",
      end:"top 50%"
    }
    
})




gsap.from(".page2-content1 h2 ",{
    y:45,
duration:0.4,
opacity:0,
    scrollTrigger:{
      trigger:".page2",
      scroller:".main",

      scrub:2,
      start:"top 65%",
      end:"top 50%"
    }
    
})


gsap.from(".page2 .line ",{
    y:40,
duration:0.5,
opacity:0,
    scrollTrigger:{
      trigger:".page2",
      scroller:".main",
  
      scrub:2,
      start:"top 65%",
      end:"top 50%"
    }
    
})























}

 page2animate()


document.addEventListener("mousemove",function(dets){

  gsap.to(".cursorseat",{
  left:dets.x,
  top:dets.y,

})
 })



 function cursorseat(){


 document.querySelector(".page4").addEventListener("mouseenter",function(){
      gsap.to(".cursorseat",{
 
   transform :"scale(1)"
})  
  
 })

 document.querySelector(".page4").addEventListener("mouseleave",function(){
         gsap.to(".cursorseat",{
     rotate:-15,
   transform :"scale(0)"
})   
 })

}

cursorseat();



var initialpath = 'M 10 200 Q 680 200 1390 200'
var finalpath = 'M 10 200 Q 680 200 1390 200'


document.querySelector(".page5 .playline").addEventListener("mousemove", function(dets){
 path =`M 10 200 Q ${dets.x} ${dets.y} 1390 200`

 
 
 gsap.to("svg path",{
  attr:{d : path},
  duration:0.3,

 })


})

document.querySelector(".page5 .playline").addEventListener("mouseleave", function(){
 gsap.to(" svg path",{
  attr:{d:finalpath},
  duration:1.8,
  ease:"elastic.out(1,0.2)"

 })



})
































var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });