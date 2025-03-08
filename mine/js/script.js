// const onCloseNavBar = document.getElementById("close");
// const mainTRhing = document.querySelector(".main-nav");
// document.addEventListener("DOMContentLoaded", () => {
//   const menuIcon = document.querySelector(".menu-icon");
//   const navMenu = document.querySelector(".main-nav");

//   menuIcon.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
//   });
  
// });
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".main-nav");
    const closeIcon = document.getElementById("close");

    // Open navbar
    menuIcon.addEventListener("click", () => {
        navMenu.classList.add("active"); // Add class to make navbar visible
    });

    // Close navbar
    closeIcon.addEventListener("click", () => {
        navMenu.classList.remove("active"); // Remove class to hide navbar
    });
});
