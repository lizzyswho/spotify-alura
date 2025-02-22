// A estrutura DOM está no arquivo HTML inteiro, a propósito, é meio impossível não usá-la.

// Usando o getElementById, as constantes abaixo constantemente, conseguimos, em tese, os elementos destacados com os seguintes Id:

const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

// Aqui temos um pequeno aviso legal, pois não lido bem com processos jurídicos e é melhor previnir do que remediar.
window.alert('Não possuo qualquer direito sobre os materiais utilizados e o site tem unicamente como proposta facilitar o estudo e aprendizagem de HTML, CSS e JS.')

function requestApi(searchTerm) {
    const url = `http://localhost:6600/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

// O add e remove, logo abaixo, que salvo engano engano estudamos, adiciona e removem uma propriedade de um elemento.

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);
})