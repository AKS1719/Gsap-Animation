// gsap.to('#box',{
//     x: 1000,
//     duration:2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     borderRadius: '50%'
// })
// gsap.from('#box2',{
//     x: 1000,
//     duration:2,
//     delay: 1
// })

// gsap.from('h1',{
//     opacity:0,
//     color:'red',
//     duration:2,
//     delay:1,
//     y:40,
//     stagger:0.3 // important 
// })

// gsap.to('#box',{
//     x:1200,
//     delay:1,
//     duration:2,
//     rotate:360,
//     repeat:-1,
//     yoyo:true // importatnt 
// })

// timeline 

// gsap.to("#box1",{
//     x:1200,
//     duration:1.5,
//     delay:1,
//     rotate:360
// })
// gsap.to("#box2",{
//     x:1200,
//     backgroundColor:'yellow',
//     duration:1.5,
//     delay:2.5,
//     rotate:360
// })
// gsap.to("#box3",{
//     x:1200,
//     scale:0.5,
//     borderRadius:'50%',
//     duration:1.5,
//     delay:4,
//     rotate:360
// })

var timeline = gsap.timeline();

// timeline.to("#box1",{
//     x:1200,
//     rotate:360,
//     duration:2,delay:1
// });

// timeline.to("#box2",{
//     x:1200,
//     backgroundColor:'yellow',
//     duration:1.5,
//     rotate:360,
// })

// timeline.to("#box3",{
//     x:1200,
//     scale:0.5,
//     borderRadius:'50%',
//     duration:1.5,
//     rotate:360
// })

timeline.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

timeline.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.4
})

timeline.from("h1",{
    y:20,
    opacity:0,
    duration:1
})