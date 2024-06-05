var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");



main.addEventListener('mousemove',(event)=>{
    gsap.to(cursor,{
        x:event.x,
        y:event.y,
        ease: "back.out",
    })
})

imageDiv.addEventListener('mouseenter',(event)=>{
    cursor.innerHTML = "View More";
    gsap.to(cursor,{
        scale:4,
        backgroundColor :"#ffffff8a"
    })
})
imageDiv.addEventListener('mouseleave',(event)=>{
    cursor.innerHTML = "";
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white"
    })
})