
function activeNav() {

    const exit = document.querySelector(".nav-div1");
    const open = document.querySelector(".sec");
    const nav = document.querySelector(".nav-off");
    const ancor = document.querySelector(".nav-a");

    open.addEventListener("click", function() {
        console.log(nav.classList.toggle("nav")); 
    })

    exit.addEventListener("click", function() {
        console.log(nav.classList.toggle("nav")); 
    })

    ancor.addEventListener("click", function() {
        console.log(nav.classList.toggle("nav")); 
    })
}

activeNav()