function cursorEffect(){
    var content = document.querySelector(".content")
    var cursor = document.querySelector(".cursor")

content.addEventListener("mousemove",function(dets){
    gsap.to (cursor,{
        x:dets.x,
        y:dets.y,
    })
})
content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1,
    })
})
content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0,
    })
})
}
cursorEffect()

// function page2animation(){
//     gsap.from(".elem h1",{
//     y:120,
//     stagger:0.2,
//     duration:1,
//     scrolltrigger:{
//         trigger:".page2",
//         scroller:"body",
//         start:"top 47%",
//         end:"top 46%",
//         markers:true,
//         scrub:2,
//     }
// })
// }
// page2animation()

