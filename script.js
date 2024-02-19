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

    let project1 = document.querySelector("#project1")
    let project2 = document.querySelector("#project2")
    let project3 = document.querySelector("#project3")
    let project4 = document.querySelector("#project4")
    let project5 = document.querySelector("#project5")
    let project6 = document.querySelector("#project6")
    project1.addEventListener("mouseenter", ()=>{
        let img = project1.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${img})`
    })
    project2.addEventListener("mouseenter", ()=>{
        let img = project2.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${img})`
    })
    project3.addEventListener("mouseenter", ()=>{
        let img = project3.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${img})`
    })
    project4.addEventListener("mouseenter", ()=>{
        let img = project4.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${img})`
    })
    project5.addEventListener("mouseenter", ()=>{
        let img = project5.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${img})`
    })
    project6.addEventListener("mouseenter", ()=>{
        let img = project6.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${img})`
    })
})