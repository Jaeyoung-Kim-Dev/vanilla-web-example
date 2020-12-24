const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    const navToggle = _ => {
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';        
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;        
            }
        })

        //Burger Animation
        burger.classList.toggle('toggle');
    }


    //Toggle Nav
    burger.addEventListener('click', () => {
        navToggle();
    })

    //Toggle Nav List
    nav.addEventListener('click', () => {
        navToggle();
    })
}

navSlide();
