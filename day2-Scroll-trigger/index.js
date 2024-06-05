// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:1,
//     rotate:360
// });
// gsap.from("#page2 #box",{
//     scale:0,
//     duration:1,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller: "body",
//         markers:true,
//         start: "top 60%"

//     }
// });


// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         start:"top 50%",
//         markers:true
//     }
// })

// gsap.from("#page2 h2",{
//     opacity:0,
//     duration:2,
//     x:-500,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//         start:"top 50%",
//         markers:true
//     }
// })

// gsap.from("#page2 #box",{
//     scale:0,
//     opacity:0,
//     duration:1,
//     rotate:360,
//     scrollTrigger:{
//         trigger: "#page2 #box",
//         scoller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:1,
//         pin:true
//     }
// })

gsap.to("#page2 h1",{
    transform:"translatex(-150%)",
    scrollTrigger:{
        trigger: "#page2",
        scoller: "body",
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        markers:true,
        pin:true, // whenever use pin always target the parent not the element 
    }
})