


tl=gsap.timeline()

tl.
from(".page1 .left h1",{
    y:35,
    opacity:0,
    ease:"none",
    

})
.from(".page1 .left h3",{
    y:30,
    opacity:0,
})
.from(".page1 .right",{
    y:30,
    opacity:0,
})
.to(".page2 img",{
    scale:1,
    scrollTrigger:{
        trigger:".page2 img",
        scroller:"body",
        scrub:2,
        // markers:true,
        
        start:"top 80%",
        end:"bottom 20%"

    }
})
.to(".page3 h1",{
    opacity:1,
    rotateX:0,
    ease:"none",
    scrollTrigger:{
        trigger:".trigger",
        scoller:"body",
        scrub:2,
        // markers:true,
        start:"top 50%",
        end:"top 70%"
        
    }

    
})
.to("#line",{
    width:"80%",
    scrollTrigger:{
        trigger:"#line",
        scroller:"body",
        // markers:true,
        scrub:1,
        

    }
})
.to(".page7 img",{
    rotate:360,
    repeat:-1,
    ease:"linear",
    duration:1
    // opacity:0
})
.to(".page8 .container2 .onediv",{
    // opacity:0
    translateX:"-40%",
    duration:2,
    ease:"linear",
    scrollTrigger:{
        trigger:".page8 .container2 .onediv",
        scoller:"body",
        // markers:true,
        scrub:4
    }


})
.to(".page8 .container2 .onediv1",{
    // opacity:0
    translateX:"-40%",
    duration:2,
    ease:"linear",
    scrollTrigger:{
        trigger:".page8 .container2 .onediv1",
        scoller:"body",
        // markers:true,
        scrub:4
    }


})






var flag=0
var b=document.querySelector(".fullscr")
var a=document.getElementById("menu")
document.addEventListener("click",(dets)=>{
    
    if(dets.target.id=="menu"){

        if(flag==0){
            b.style.top=0;
            document.querySelector(".nav").style.color="black";
        document.querySelector(".innav ").innerHTML=`<h2>cart &nbsp; 0</h2>
        <i id="menu" class="ri-close-fill menu" ></i>`
        
        flag=1
        console.log(flag)
    }
    else if(flag==1){
        console.log(dets.target)
        document.querySelector(".innav ").innerHTML=`<h2>cart &nbsp; 0</h2>
        <i id="menu" class="ri-menu-3-line menu"></i>`;
        
        b.style.top="-20%";
        document.querySelector(".nav").style.color="#d1d1d1";
        flag=0
        console.log(flag)
    }
}
})
var yesimg=document.querySelector(".yes img")
var yes=document.querySelector(".yes")
var no=document.querySelector(".no")
var noimg=document.querySelector(".no img")
yes.addEventListener("mousemove",(dets)=>{
    yesimg.style.opacity=1
   yesimg.style.left=`${dets.x-450}px`
   yesimg.style.top=`${dets.y-400}px`
})
yes.addEventListener("mouseleave",(dets)=>{
    yesimg.style.opacity=0
    
})
no.addEventListener("mousemove",(dets)=>{
    // yesimg.style.opcity=0
    noimg.style.opacity=1
    // console.log("nded")
    noimg.style.left=`${dets.x-800}px`
    noimg.style.top=`${dets.y-400}px`
})
no.addEventListener("mouseleave",(dets)=>{
    noimg.style.opacity=0

})
// yesimg.addEventListener("click",(dets)=>{
//     console.log(yesimg.style.left) 
//     // console.log(dets.x)
    
//     // console.log(dets)
// })
// function mousein(x){
//     x.style.display="initial"
//     x.style.left=
// }
