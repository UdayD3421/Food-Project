// // const themeToggleButton = document.getElementById('theme-toggle');

// // themeToggleButton.addEventListener('click', () => {
// //     document.body.classList.toggle('dark-mode');
    
// //     // Change the icon based on the current theme
// //     if (document.body.classList.contains('dark-mode')) {
// //         themeToggleButton.innerHTML = '🌞'; // Sun icon for light mode
// //     } else {
// //         themeToggleButton.innerHTML = '🌙'; // Moon icon for dark mode
// //     }
// // });

// // main.js
// document.addEventListener("DOMContentLoaded", () => {
//     const darkModeToggle = document.getElementById("dark-mode-toggle");
//     const body = document.body;
  
//     // Apply saved mode
//     if (localStorage.getItem("theme") === "dark") {
//       body.classList.add("dark");
//       darkModeToggle.textContent = "☀️";
//     }
  
//     // Toggle dark mode
//     darkModeToggle.addEventListener("click", () => {
//       body.classList.toggle("dark");
  
//       if (body.classList.contains("dark")) {
//         localStorage.setItem("theme", "dark");
//         darkModeToggle.textContent = "☀️";
//       } else {
//         localStorage.setItem("theme", "light");
//         darkModeToggle.textContent = "🌙";
//       }
//     });
//   });
  


//nilhil
// console.log("start");
// document.addEventListener("DOMContentLoaded", () => {
//   const toggle = document.getElementById("darkModeToggle");

//   // Load preference
//   if (localStorage.getItem("main") === "dark") {
//     console.log("dark");
//     document.body.classList.add("dark-mode");
//     if (toggle) toggle.checked = true;
//   }

//   if (toggle) {
//     toggle.addEventListener("change", () => {
//       if (toggle.checked) {
//         document.body.classList.add("dark-mode");
//         localStorage.setItem("theme", "dark");
//       } else {
//         document.body.classList.remove("dark-mode");
//         localStorage.setItem("theme", "light");
//       }
//     });
//     }
//   });

// document.addEventListener("DOMContentLoaded", () => {
//   const toggle = document.getElementById("darkModeToggle");

//   // Load preference
//   if (localStorage.getItem("theme") === "dark") {
//       document.body.classList.add("dark-mode");
//       document.querySelector('.header').classList.add("dark-mode");
//       document.querySelector('.nav').classList.add("dark-mode");
//       document.querySelector('.footer').classList.add("dark-mode");
//       if (toggle) toggle.checked = true;
//   }

//   if (toggle) {
//       toggle.addEventListener("change", () => {
//           if (toggle.checked) {
//               document.body.classList.add("dark-mode");
//               document.querySelector('.header').classList.add("dark-mode");
//               document.querySelector('.nav').classList.add("dark-mode");
//               document.querySelector('.footer').classList.add("dark-mode");
//               localStorage.setItem("theme", "dark");
//           } else {
//               document.body.classList.remove("dark-mode");
//               document.querySelector('.header').classList.remove("dark-mode");
//               document.querySelector('.nav').classList.remove("dark-mode");
//               document.querySelector('.footer').classList.remove("dark-mode");
//               localStorage.setItem("theme", "light");
//           }
//       });
//   }
// });

//fresh code

// document.addEventListener("DOMContentLoaded" , ()=>{
//     const toggle = document.getElementById("darkModeToggle");
//     const body = document.body;
//     if(toggle){
//         const savedTheme = localStorage.getItem("theme");
//         if(savedTheme === "dark"){
//             body.classList.add("dark");
//             toggle.textContent = 'Light';
//         }else{
//             toggle.textContent='Dark';
//         }
//         toggle.addEventListener("click" ,()=>{
//             body.classList.toggle("dark");
//             const isDark = body.classList.contains("dark");
//             localStorage.setItem("theme", isDark ? "dark" : "light");
//             toggle.textContent= isDark ? "light" : "dark";
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("darkModeToggle");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
    // Load saved theme or fallback to system preference
    const savedTheme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");
    document.body.classList.toggle("dark", savedTheme === "dark");
    toggle.checked = savedTheme === "dark";
  
    toggle.addEventListener("change", () => {
        console.log("clicked");
        alert('clicked');
      document.body.classList.toggle("dark", toggle.checked);
      localStorage.setItem("theme", toggle.checked ? "dark" : "light");
    });
  });