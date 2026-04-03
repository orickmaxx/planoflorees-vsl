document.addEventListener("DOMContentLoaded", function() {

    // ============ SCROLL-REVEAL (IntersectionObserver) ============
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -30px 0px",
        }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // ============ HEADER: Glass shadow on scroll ============
    const header = document.querySelector(".clean-header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 20) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }, { passive: true });
    }

    // ============ FAQ ACCORDION ============
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            // Fecha as outras respostas antes de abrir a clicada
            const openQuestions = document.querySelectorAll(".faq-question.active");
            openQuestions.forEach(openQ => {
                if (openQ !== question) {
                    openQ.classList.remove("active");
                    openQ.nextElementSibling.style.maxHeight = null;
                }
            });

            // Adiciona/remove classe active para girar o ícone
            this.classList.toggle("active");

            // Pegando o painel correspondente (a resposta)
            const answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                // Se está aberto, fecha
                answer.style.maxHeight = null;
            } else {
                // Se está fechado, abre com base no scrollHeight real
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // ============ CTA BUTTON MICRO-INTERACTION ============
    const ctaButtons = document.querySelectorAll(".btn-primary-giant");
    ctaButtons.forEach(btn => {
        btn.addEventListener("mousedown", function() {
            this.style.transform = "translateY(0) scale(0.97)";
        });
        btn.addEventListener("mouseup", function() {
            this.style.transform = "";
        });
        btn.addEventListener("mouseleave", function() {
            this.style.transform = "";
        });
    });

});
