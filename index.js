
function activeNav() {

    const exit = document.querySelector(".nav-div1");
    const open = document.querySelector(".sec");
    const nav = document.querySelector(".nav-off");
    const ancor = document.querySelector(".nav-a");
    const ancor2 = document.querySelector(".nav-a2");
    const ancor3 = document.querySelector(".nav-a3");
    const ancor4 = document.querySelector(".nav-a4");
    const ancor5 = document.querySelector(".nav-a5");

    open.addEventListener("click", function() {
        nav.classList.toggle("nav"); 
    })

    exit.addEventListener("click", function() {
        nav.classList.toggle("nav"); 
    })

    ancor.addEventListener("click", function() {
        nav.classList.toggle("nav"); 
    })

    ancor2.addEventListener("click", function() {
        nav.classList.toggle("nav"); 
    })

    ancor3.addEventListener("click", function() {
        nav.classList.toggle("nav"); 
    })

    ancor4.addEventListener("click", function() {
        nav.classList.toggle("nav"); 
    })

    ancor5.addEventListener("click", function() {
        nav.classList.toggle("nav"); 
    })
}

function email() {
    const formDom = document.querySelector('.form')
    const ancorDom = document.querySelector('.theEnd')

    formDom.addEventListener('submit', handleSubmit)

    function handleSubmit (e) {
        e.preventDefault()
        const from = new FormData(this)
        ancorDom.setAttribute('href', `mailto:aeriael43@gmail.com?subject=${from.get('name')}&body=${from.get('msg')}`)
        ancorDom.click()
    }
}

activeNav()
email()