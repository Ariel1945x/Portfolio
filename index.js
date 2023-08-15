
function activeNav() {

    const exit = document.querySelector(".nav-div1");
    const open = document.querySelector(".sec");
    const nav = document.querySelector(".nav-off");

    open.addEventListener("click", function() {
        nav.classList.toggle("nav"); 
    })

    exit.addEventListener("click", function() {
        nav.classList.toggle("nav"); 
    })
}

activeNav()