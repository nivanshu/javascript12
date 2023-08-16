// 4 pillars of dom 
// selection of an element 
// changing HTML 
// changing CSS 
// Event listener
// var a=document.querySelector("h1")
// var b=document.querySelector("h2")
// a.innerHTML="kaise ho mere reels ke chahne walo "
// a.style.color="yellow"
// a.style.backgroundColor="black"
// var b=document.querySelector("h2")
// b.innerHTML="hello mera naam hi  nivanshu gupta hai"
// b.style.color="blue"
// b.style.backgroundColor="pink"
// a.addEventListener("click",function(){
// a.innerHTML="kaise ho mere reels ke chahne walo "
// a.style.color="yellow"
// a.style.backgroundColor="black"
// console.log("heyyyyyyyyyyyyyyy")

// })

// a.addEventListener
var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var c=0
btn.addEventListener("click",function(){
    if(c==0){
    bulb.style.backgroundColor="yellow"
     console.log("onnnnnn")   
     c=1
    }
    else{
    bulb.style.backgroundColor="transparent"
     console.log("offffff")   
     c=0
         
    }
    var h=document.querySelectorAll("h1")
    h.innerHTML="MAI SABKO BADAL SAKTA HU"
    
    // document.getElementById("box")
}
)

