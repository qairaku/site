const bau = document.getElementById('bau');
const inicio = document.getElementById('inicio');
const menu = document.getElementById('menu');
const musica = document.getElementById('musica');

musica.volume = 0.15;

bau.addEventListener('click', function () {

    bau.classList.add("aberto");

    musica.play();

    setTimeout(function () {

        inicio.classList.add("saindo");
        menu.classList.add("visivel");

        setTimeout(function () {
            inicio.style.display = "none";
        }, 1000);

    }, 1000);

});

const botaoPlaylist = document.getElementById('botaoPlaylist');
const botaoMensagem = document.getElementById('botaoMensagem');

const playlist = document.getElementById('playlist');
const mensagem = document.getElementById('mensagem');

const voltarPlaylist = document.getElementById('voltarPlaylist');
const voltarMensagem = document.getElementById('voltarMensagem');

const volume = document.getElementById('volume');

volume.addEventListener('input', function () {
    musica.volume = volume.value;
});


botaoPlaylist.addEventListener('click', function () {
    menu.classList.remove("visivel");
    playlist.classList.add("visivel");
});


botaoMensagem.addEventListener('click', function () {
    menu.classList.remove("visivel");
    mensagem.classList.add("visivel");
});


voltarPlaylist.addEventListener('click', function () {
    playlist.classList.remove("visivel");
    menu.classList.add("visivel");
});


voltarMensagem.addEventListener('click', function () {
    mensagem.classList.remove("visivel");
    menu.classList.add("visivel");
});