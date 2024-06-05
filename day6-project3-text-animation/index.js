var h1 =document.querySelector('h1');
var h1Text = h1.textContent;


// console.log(clutter)

function breakTheText()
{
    var splitedText = h1Text.split('')
    var clutter = ""
    splitedText.forEach((ele,idx)=>{
        if(ele==' ')ele="&nbsp";
        if(splitedText.length / 2 >= idx)clutter+=`<span class="lhalf">${ele}</span>`;
        else clutter = clutter + `<span class="rhalf">${ele}</span>`;

    })
    console.log(clutter);
    h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .lhalf",{
    y:100,
    duration:0.8,
    delay:0.5,
    stagger:0.1,
    opacity:0
})

gsap.from("h1 .rhalf",{
    y:100,
    duration:0.8,
    delay:0.5,
    stagger:-0.1,
    opacity:0
})