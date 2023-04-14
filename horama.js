const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;
const sections  = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bars-wrapper');
window.addEventListener('scroll', ()=>{
    mainFn();
});

const mainFn = () =>{
    if(window.pageYOffset >= navbar.offsetTop)
    {
       navbar.classList.add('sticky');
    }
    else
    {
        navbar.classList.remove('sticky');
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
