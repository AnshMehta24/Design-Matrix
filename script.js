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

    // We can also use forEach for better optimization
    let rightimg = document.querySelector('.rightside')
    let prj1 = document.querySelector('#h101')
    let prj2 = document.querySelector('#h102')
    let prj3 = document.querySelector('#h103')
    prj1.addEventListener('click', ()=>{
        let line = document.querySelector('.innerLine')
        let para1 = document.querySelector('.leftside p')
        para1.innerHTML="Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."

        prj1.style.color = "#EFEAE3"
        prj2.style.color = "#504A45"
        prj3.style.color = "#504A45"
        line.style.top = '0vh'
        rightimg.style.backgroundImage ='url(https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg)'
       
    })
    prj2.addEventListener('click', ()=>{
        let line = document.querySelector('.innerLine')
        let para2 = document.querySelector('.leftside p')
        para2.innerHTML="Once we have a design, our production team<br> takes the lead in bringing it to life. We manage all<br> stages of the project, from build specifications and<br> technical drawings to site surveys, vendor<br> management, and 2D & 3D production. We have<br> an extensive network of partners to meet each<br> unique design and project need."
        prj2.style.color = "#EFEAE3"
        prj1.style.color = "#504A45"
        prj3.style.color = "#504A45"
        line.style.top = '12vh'
        
       rightimg.style.backgroundImage ='url(https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp)'
       
    })
    prj3.addEventListener('click', ()=>{
        let line = document.querySelector('.innerLine')
        let para = document.querySelector('.leftside p')
        para.innerHTML="We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
        prj3.style.color = "#EFEAE3"
        prj1.style.color = "#504A45"
        prj2.style.color = "#504A45"
        line.style.top = '23vh'
        rightimg.style.backgroundImage ='url(https://cdn.dribbble.com/users/1121893/screenshots/5555705/dribbble-eline_ye.gif)'
       
    })

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 20
      });


      let swiper_container = document.querySelector('.swiper') 
      let mouse_follower = document.querySelector('.mouse-follower')
      swiper_container.addEventListener("mouseenter", ()=>{
        // mouse_follower.style.opacity = 1;
        // mouse_follower.style.scale = 1;
        gsap.to(mouse_follower,{
            scale:1,
            opacity:1
        })
      })

      swiper_container.addEventListener('mouseleave',()=>{
        gsap.to(mouse_follower,{
            scale:0,
            opacity:0
        })
      })

      swiper_container.addEventListener('mousemove', (event) => {
     
      
        mouse_follower.style.left = event.clientX - swiper_container.getBoundingClientRect().left + 'px';
        mouse_follower.style.top = event.clientY - swiper_container.getBoundingClientRect().top+ 'px';
      });

      
      let menu = document.querySelector('nav h3');
      let fullScr = document.querySelector('.fullScr');
      let navh1 = document.querySelector('nav h1');
      let flag =0;

      menu.addEventListener('click', ()=>{
        if(flag ===0){
            flag =1;
            fullScr.style.top = 0;
            navh1.style.opacity = 0;
        }else{
            flag =0;
            fullScr.style.top = "-100%"
            navh1.style.opacity = 1;
        }
      })
      
      let loader = document.querySelector('.loader')


      setTimeout(()=>{
            loader.style.top ="-100%"        
      }, 3000)
    
})