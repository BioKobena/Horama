const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;
const sections  = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const container_nav = document.querySelector(".container-nav")
// const progress = document.querySelector('.progress-bars-wrapper');
window.addEventListener('scroll', ()=>{
    mainFn();
});

const mainFn = () =>{
    if(window.pageYOffset >= navbar.offsetTop)
    {
       navbar.classList.add('sticky');
       container_nav.style.backgroundColor = 'none'
       container_nav.style.boxShadow = '0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2)';

    }
    else
    {
       navbar.classList.remove('sticky');
       container_nav.backgroundImage= "-webkit-gradient(linear, 0 0, 100% 100%, color-stop(0, #003073), color-stop(100%, #029797));"
       container_nav.backgroundImage= "-webkit-linear-gradient(135deg, #003073, #029797);"
       container_nav.backgroundImage= "-moz-linear-gradient(45deg, #003073, #029797);"
       container_nav.backgroundImage= "-ms-linear-gradient(45deg, #003073 0, #029797 100%);"
       container_nav.backgroundImage= "-o-linear-gradient(45deg, #003073, #029797);"
       container_nav.backgroundImage= "linear-gradient(135deg, #003073, #029797);"
     
       container_nav.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0.5)';


    }

    sections.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop - 10)
        {
            navbarLinks.forEach(navbarLinks=> {
                navbarLinks.classList.remove('change')
            })
            navbarLinks[i].classList.add('change');
        }
    })

}
mainFn();

window.addEventListener('resize', ()=>{
    window.location.reload;
})
