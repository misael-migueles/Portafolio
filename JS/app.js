const menu = document.querySelector(".Menu");
const openMenu = document.querySelector(".Open");
const closeMenu = document.querySelector(".Close");

function togglemenu(){
    menu.classList.toggle("Menu-open");
    }

openMenu.addEventListener("click", togglemenu);
closeMenu.addEventListener("click", togglemenu);

const menuLink = document.querySelectorAll('.Menu a[href^="#"]');
menuLink.forEach((call) => {
    call.addEventListener("click", function(){
        menu.classList.remove("Menu-open");
    })
});
