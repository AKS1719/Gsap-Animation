var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");
var timeline = gsap.timeline();

timeline.to("#full",{
    right:0,
    duration:0.6
})

timeline.from("#full h4",{
    x:150,
    duration:0.7,
    stagger:0.3,
    opacity:0
})

timeline.from("#full i",{
    opacity:0
})

timeline.pause();

menu.addEventListener('click',()=>{
    timeline.play();
})

cross.addEventListener('click',()=>{
    timeline.reverse();
})