document.getElementById("searchBar").addEventListener("input", function () {   //Barra de pesquisa

  const termo = this.value.toLowerCase();
  const tabela = document.getElementById("tabela");
  const linhas = tabela.getElementsByTagName("tr");

  for (let i = 1; i < linhas.length; i++) {
    let texto = linhas[i].textContent.trim().substring(0, 3).toLowerCase();
    if (texto.includes(termo)) {
      linhas[i].style.display = "";
    } else {
      linhas[i].style.display = "none";
    }
  }
});




/*
const playlist = [
  "audio/A Começar em Mim.mp3",
  "audio/06. Vejo o Senhor - Louvor X.mp3",
];

let currentSongIndex = 0;
let audio = document.getElementById("myAudio");


function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  audio.src = playlist[currentSongIndex];
  audio.play();
 
}

setTimeout(nextSong, 3000);

audio.src = playlist[currentSongIndex];
audio.play();*/