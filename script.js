// =========================================================
// MENTORIA MEDICINA - STUDENT PORTAL
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".portal-card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            card.style.transform = "scale(0.97)";

            setTimeout(() => {
                card.style.transform = "";
            }, 150);

        });

    });

});
