//console.log("js has been loaded!");

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

// "event name", callback function
menuBtn.addEventListener("click", function() {
    //console.log("cllllllicked!!");
    mobileMenu.classList.add("active");
}); // end of menuBtn click

closeBtn.addEventListener("click", function() {
    //console.log("cllllllicked!!");
    mobileMenu.classList.remove("active");
}); // end of menuBtn click