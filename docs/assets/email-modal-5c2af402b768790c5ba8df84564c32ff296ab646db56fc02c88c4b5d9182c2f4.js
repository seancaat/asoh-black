function toggleEmailModal(e){e.target;(document.querySelector(".container.info .email-modal")||document.querySelector(".intro .email-modal")).classList.toggle("hidden")}document.querySelectorAll(".get-updates").forEach(e=>{e.addEventListener("click",toggleEmailModal,{passive:!0})}),document.querySelectorAll(".email-modal .close").forEach(e=>{e.addEventListener("click",toggleEmailModal,{passive:!0})});
//# sourceMappingURL=/assets/source-maps/email-modal.js.map
//# sourceURL=_assets/js/email-modal.js
