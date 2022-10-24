//creates a fade in animation when the content is loaded
document.addEventListener("DOMContentLoaded", () =>{
    window.setTimeout(function(){
        document.body.className = ''
    }, 500);
});

//observes when the user scrolls down the page
//when user scrolls down and intersects with the entries, the classes are then added to the elements with an animated tag
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            /**this selects all the article tags with the animated class and adds the fade classes according to 
             * the array
             */
            //document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
        }
    })
})
/**calls the observer function and starts it by selecting the parent element that has the fade-container
 * class
 */
observer.observe(document.querySelector(".fade-container"));

//mobile menu
function toggleMobileMenu(menu){
    menu.classList.toggle('open');
  } /*for when the user opens the hamburger menu*/
