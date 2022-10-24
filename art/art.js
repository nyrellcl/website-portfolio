const fade = document.querySelectorAll(".fade");

const slider = document.querySelectorAll(".slide");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry =>{
        if (!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);//stop observing once done
        }
    })
}, appearOptions);

fade.forEach(fader =>{
    appearOnScroll.observe(fader);
});

slider.forEach(sliders =>{
    appearOnScroll.observe(sliders);
});

//mobile menu
function toggleMobileMenu(menu){
    menu.classList.toggle('open');
  } /*for when the user opens the hamburger menu*/

  //creates a fade in animation when the content is loaded
document.addEventListener("DOMContentLoaded", () =>{
    window.setTimeout(function(){
        document.body.className = ''
    }, 500);
});