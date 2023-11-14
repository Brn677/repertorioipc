document.getElementById("searchBar").addEventListener("input", function () {   //Barra de pesquisa

  const termo = this.value.toLowerCase();
  const tabela = document.getElementById("tabela");
  const linhas = tabela.getElementsByTagName("tr");

  for (let i = 1; i < linhas.length; i++) {
    let texto = linhas[i].textContent.trim().slice().toLowerCase();
    if (texto.includes(termo)) {
      linhas[i].style.display = "";
    } else {
      linhas[i].style.display = "none";
    }
  }
});
