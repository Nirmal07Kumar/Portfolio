let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}
let section = document.querySelectorAll("selection");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () =>{
    secrions.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttributes("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document.querySelector("header nav a[href+=" + id + "]").classList.add("active");
            });
        }

    });
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.screenY > 100);

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.social-media-icon .home-img', {origin: 'bottom'});
ScrollReveal().reveal('a .btn', {origin: 'left'});


const typed = new Typed('.text', {
    strings: ['Backend Developer'],
    typeSpeed: 90,
    backspeed: 100,
    backDelay: 1000,
    loop: true,
  });