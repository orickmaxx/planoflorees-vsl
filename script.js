document.addEventListener("DOMContentLoaded", function() {
    
    // Configura os Accordions de FAQ
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
                // Se está fechado, abre colocando um max-height com base no scrollHeight real do parágrafo
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Em simulação real de uma VSL, a chamada (CTAs) em algumas abordagens pode ficar invisível até X tempo de vídeo.
    // Nessa implementação como o foco é VSL rápida/direta para B2C imediatista, já deixamos os botões abertos.
});
