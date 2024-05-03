$(document).ready(function () {
  var data = [
    {
      title: "Baldur's Gate 3",
      content:
        "Reúna seu grupo e volte aos Reinos Esquecidos em uma história de amizade e traição, sacrifício e sobrevivência, e tentação pelo poder absoluto.",
      image: "assets/assetshome/baldursgate.jpg",
      url: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
    },
    {
      title: "Elden Ring",
      content:
        "Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.",
      image: "assets/assetshome/eldenring.jpg",
      url: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
    },
    {
      title: "Helldivers 2",
      content:
        "A última linha ofensiva da Galáxia. Aliste-se aos Helldivers e lute pela Liberdade numa galáxia hostil neste feroz, frenético e veloz jogo de tiro em terceira pessoa.",
      image: "assets/assetshome/helldivers2.jpg",
      url: "https://store.steampowered.com/app/553850/HELLDIVERS_2/",
    },
    {
      title: "Counter Strike 2",
      content:
        "Há mais de duas décadas, o Counter-Strike oferece uma experiência competitiva de elite moldada por milhões de jogadores mundialmente. Agora, o próximo capítulo da história do CS vai começar. Isso é Counter-Strike 2.",
      image: "assets/assetshome/CS2.jpg",
      url: "https://store.steampowered.com/app/730/CounterStrike_2/",
    },
    {
      title: "War Thunder",
      content:
        "War Thunder é um MMO de combate grátis, dedicado a veículos militares dos períodos da 2ª Guerra Mundial e Guerra da Coreia. Lute em grandes batalhas no ar, terra e mar, com jogadores internacionais num ambiente sempre em desenvolvimento.",
      image: "assets/assetshome/warthunder.jpg",
      url: "https://store.steampowered.com/app/236390/War_Thunder/",
    },
    {
      title: "Titanfall 2",
      content:
        "Titanfall 2 é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Respawn Entertainment e publicado pela Electronic Arts. Lançado em 2016, é a sequência do jogo original Titanfall.",
      image: "assets/assetshome/titanfall2.jpg",
      url: "https://store.steampowered.com/app/1237970/Titanfall_2/",
    },
    {
      title: "Call of Duty MW",
      content:
        "um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Infinity Ward e publicado pela Activision. Lançado em 2019, é uma reimaginação do jogo original Call of Duty 4: Modern Warfare",
      image: "assets/assetshome/cod.jpg",
      url: "https://store.steampowered.com/app/2000950/Call_of_Duty_Modern_Warfare/",
    },
    {
      title: "Dota 2",
      content:
        "Diariamente, milhões de jogadores mundo afora batalham como um dentre os mais de cem heróis do Dota. Estejam jogando há 10 ou 1.000 horas, há sempre algo novo para descobrir. Com atualizações constantes das mecânicas, recursos e heróis.",
      image: "assets/assetshome/dota2.jpg",
      url: "https://store.steampowered.com/app/570/Dota_2/",
    },
    {
      title: "Sekiro",
      content:
        "Em Sekiro™: Shadows Die Twice, você é o 'lobo de um braço só', um guerreiro desfigurado e desgraçado, resgatado da beira da morte. Jurado para proteger um jovem lorde descendente de uma antiga linhagem de sangue, você vira alvo de muitos inimigos perigosos, incluindo o temido clã Ashina.",
      image: "assets/assetshome/sekiro.jpg",
      url: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/",
    },
  ];

  var itemsPerPage = 3;
  var currentPage = 1;

  function renderCards() {
    var startIndex = (currentPage - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    var cardContainer = $("#card-container");
    cardContainer.empty();
    for (var I = startIndex; I < endIndex && I < data.length; I++) {
      var card = $(
        '<div class="col-sm-4 "><div id="card-recomendados" class="card shadow custom-card"><img src="' +
          data[I].image +
          '" class="card-img-top img-fluid" alt="Imagem"><div class="card-body"><h5 class="card-title">' +
          data[I].title +
          '</h5><p class="card-text-destaque">' +
          data[I].content +
          "</p>" +
          '<div class="container-button text-end"><a href="' +
          data[I].url +
          '" target="_blank" class="btn btn-primary">Link do jogo</a>' +
          "</div></div></div></div>"
      );
      cardContainer.append(card);
    }
    console.log("cards renderizado");
  }

  function renderPagination() {
    var totalPages = Math.ceil(data.length / itemsPerPage);
    var paginationContainer = $("#pagination");
    paginationContainer.empty();

    var prevPageArrow = $(
      '<li class="page-item ' +
        '"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>'
    );
    prevPageArrow.click(function (event) {
      event.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        renderCards();
        renderPagination();
      } else if (currentPage === 1) {
        currentPage = totalPages;
        renderCards();
        renderPagination();
      }
    });
    paginationContainer.append(prevPageArrow);

    for (var I = 1; I <= totalPages; I++) {
      var listItem = $(
        '<li class="page-item ' +
          (I === currentPage ? "active" : "") +
          '"><a class="page-link" href="#">' +
          I +
          "</a></li>"
      );
      listItem.click(function (event) {
        event.preventDefault();
        currentPage = parseInt($(this).text());
        renderCards();
        renderPagination();
      });
      paginationContainer.append(listItem);
    }

    var nextPageArrow = $(
      '<li class="page-item ' +
        '"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>'
    );
    nextPageArrow.click(function (event) {
      event.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        renderCards();
        renderPagination();
      } else if (currentPage === totalPages) {
        currentPage -= totalPages - 1;
        renderCards();
        renderPagination();
      }
    });
    paginationContainer.append(nextPageArrow);
  }

  renderCards();
  renderPagination();

  $("#pagination").on("click", ".page-link", function (event) {
    event.preventDefault();
    currentPage = parseInt($(this).text());
    renderCards();
    renderPagination();
  });
});
