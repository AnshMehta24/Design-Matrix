const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
document.addEventListener("DOMContentLoaded" , ()=>{
    let abc=document.querySelector(".Projects-Container")
    let fixed = document.querySelector(".fixed-videos")
    abc.addEventListener('mouseenter', ()=>{
        fixed.style.display = "block"
    })
    abc.addEventListener("mouseleave", ()=>{
        fixed.style.display = "none"
    })
})