// Alerta de boas-vindas (exibe apenas uma vez)
window.addEventListener("load", () => {
    if (!localStorage.getItem("visited")) {
        alert("Bem-vindo ao Portal de Notícias!");
        localStorage.setItem("visited", "true");
    }
    // Função de pesquisa por texto
    document.getElementById("form-pesquisa").addEventListener("submit", function (e) {
        e.preventDefault();
        const termo = document.getElementById("barra-pesquisa").value.toLowerCase();
        const cards = document.querySelectorAll(".col-md-4");

        cards.forEach(card => {
            const titulo = card.querySelector(".card-title").textContent.toLowerCase();
            const descricao = card.querySelector(".card-text").textContent.toLowerCase();

            if (titulo.includes(termo) || descricao.includes(termo)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
            
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        const searchInput = document.getElementById('searchInput');
        const noticias = document.querySelectorAll('.noticia');
      
        searchInput.addEventListener('input', function () {
          const termo = searchInput.value.toLowerCase();
      
          noticias.forEach(noticia => {
            const texto = noticia.textContent.toLowerCase();
            if (texto.includes(termo)) {
              noticia.style.display = 'block';
            } else {
              noticia.style.display = 'none';
            }
          });
        });
      });
      


    // Animação ao aparecer os cards
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 200 * index);
    });
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
// Filtro por categoria
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".col-md-4");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            cards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (category === "all" || cardCategory === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});


