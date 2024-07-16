// toggle navbar
const navbar = document.getElementById("navbar");
const nav = document.getElementById("nav");
document.getElementById("navbar").onclick = (e) => {
    if(navbar.classList.contains('fa-bars')){
        navbar.classList.remove("fa-bars");
        navbar.classList.add("fa-xmark");
        nav.style.left = 0 + "px";
    }else{
        navbar.classList.remove("fa-xmark");
        navbar.classList.add("fa-bars");
        nav.style.left = -315 + "px";

    }
}