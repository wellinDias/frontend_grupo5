const cards = document.querySelectorAll(".categoryCard");

cards.forEach((card) => {
  const estrelas = card.querySelectorAll(".estrela");
  const textoDeAvaliacao = card.querySelector(".p-avaliacao");
  const avaliacaoSelecionada = card.querySelector(".avaliacao-selecionada");
  let avaliacaoCorrente = 0;

  estrelas.forEach((estrela) => {
    estrela.addEventListener("click", () => {
      const avaliacao = parseInt(estrela.getAttribute("dado-de-avaliacao"));
      avaliacaoCorrente = avaliacao;
      atualizarAvaliacao(card);
    });
    estrela.addEventListener("mouseover", () => {
      const avaliacao = parseInt(estrela.getAttribute("dado-de-avaliacao"));
      destacarEstrelas(avaliacaoCorrente, estrelas);
    });

    estrela.addEventListener("mouseout", () => {
      destacarEstrelas(avaliacaoCorrente, estrelas);
    });
  });

  function destacarEstrelas(avaliacao, estrelas) {
    estrelas.forEach((estrela) => {
      const estrelaAvaliada = parseInt(
        estrela.getAttribute("dado-de-avaliacao")
      );
      if (estrelaAvaliada <= avaliacao) {
        estrela.innerHTML = "&#9733;";
      } else {
        estrela.innerHTML = "&#9734";
      }
    });
  }

  function atualizarAvaliacao(card) {
    avaliacaoSelecionada.textContent = avaliacaoCorrente;
    textoDeAvaliacao.textContent = `Avaliacao: ${avaliacaoCorrente} estrelas `;
  }
});
