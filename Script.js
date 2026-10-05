/* =========================================
   MENTORIA MEDICINA
   STUDENT PORTAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".portal-card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const pageName = card.dataset.page;

            console.log("Opening:", pageName);

        });

    });

});
