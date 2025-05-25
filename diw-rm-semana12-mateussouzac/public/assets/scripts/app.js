const baseUrl = "http://localhost:3000/jogadores";

if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
  fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById("lista-jogadores");
      if (lista) {
        lista.innerHTML = "";
        data.forEach(jogador => {
          const item = document.createElement("li");
          item.innerHTML = `<a href="detalhes.html?id=${jogador.id}">${jogador.nome} - ${jogador.time}</a>`;
          lista.appendChild(item);
        });
      }
    })
    .catch(err => console.error("Erro ao carregar jogadores:", err));
}

if (window.location.pathname.includes("detalhes.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (id) {
    fetch(`${baseUrl}/${id}`)
      .then(response => response.json())
      .then(jogador => {
        document.getElementById("nome").textContent = jogador.nome;
        document.getElementById("time").textContent = jogador.time;
        document.getElementById("posicao").textContent = jogador.posicao;
      })
      .catch(err => console.error("Erro ao carregar detalhes:", err));
  }
}
