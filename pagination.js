$(document).ready(function () {
  var data = [
    { title: "Card 1", content: "Card 1", image: "assets/logo-teste.png" },
    { title: "Card 2", content: "Card 2", image: "assets/logo-teste.png" },
    { title: "Card 3", content: "Card 3", image: "assets/logo-teste.png" },
    { title: "Card 4", content: "Card 4", image: "assets/logo-teste.png" },
    { title: "Card 5", content: "Card 5", image: "assets/logo-teste.png" },
    { title: "Card 6", content: "Card 6", image: "assets/logo-teste.png" },
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
        '<div class="col-sm-4"><div class="card custom-card"><img src="' +
          data[I].image +
          '" class="card-img-top img-fluid" alt="Imagem"><div class="card-body"><h5 class="card-title">' +
          data[I].title +
          '</h5><p class="card-text">' +
          data[I].content +
          "</p></div></div></div>"
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
        (currentPage === 1 ? "disabled" : "") +
        '"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>'
    );
    prevPageArrow.click(function (event) {
      event.preventDefault();
      if (currentPage > 1) {
        currentPage--;
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
        (currentPage === totalPages ? "disabled" : "") +
        '"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>'
    );
    nextPageArrow.click(function (event) {
      event.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        renderCards();
        renderPagination();
      }
    });
    paginationContainer.append(nextPageArrow);
  }

  /*
  function renderPagination() {
    var totalPages = Math.ceil(data.length / itemsPerPage);
    var paginationContainer = $("#pagination");
    paginationContainer.empty();
    for (var I = 1; I <= totalPages; I++) {
      var listItem = $(
        '<li class="page-item"><a class="page-link" href="#">' + I + "</a></li>"
      );
      if (I === currentPage) {
        listItem.addClass("active");
      }
      paginationContainer.append(listItem);
    }
    console.log("pagination renderizado");
  }
*/
  renderCards();
  renderPagination();

  $("#pagination").on("click", ".page-link", function (event) {
    event.preventDefault();
    currentPage = parseInt($(this).text());
    renderCards();
    renderPagination();
  });
});
