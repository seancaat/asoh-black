function toggleMenu(){(menu=document.querySelector(".menu")).classList.toggle("hidden"),document.querySelector(".menu-button.close").classList.toggle("hidden"),document.querySelector(".menu-button.open").classList.toggle("hidden")}function toggleEmailModal(e){menu||(menu=document.querySelector(".menu"));var t=e.target;menu.contains(t)?(document.querySelector(".menu > .email-modal").classList.toggle("hidden"),document.querySelector(".menu > .site-nav").classList.toggle("hidden")):document.querySelector(".container.info .email-modal").classList.toggle("hidden")}var menu;window.addEventListener("DOMContentLoaded",function(){document.querySelector(".menu-controls").addEventListener("click",toggleMenu),document.querySelectorAll(".get-updates").forEach(e=>{e.addEventListener("click",toggleEmailModal)}),document.querySelectorAll(".email-modal .close").forEach(e=>{e.addEventListener("click",toggleEmailModal)})});