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
       container_nav.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
       container_nav.style.boxShadow = '0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2)';

    }
    else
    {
        navbar.classList.remove('sticky');
       container_nav.style.backgroundColor = 'none';
     
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
