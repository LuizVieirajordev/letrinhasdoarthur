const lettersContainer = document.getElementById('letters');
const dropAreasContainer = document.getElementById('drop-areas');
const message = document.getElementById('message');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');

// Lista de letras e suas imagens correspondentes
const letterData = [
    { letter: 'A', image: 'abacaxi.png' },
    { letter: 'B', image: 'bola.png' },
    { letter: 'C', image: 'cachorro.png' },
    { letter: 'D', image: 'dado.png' },
    { letter: 'E', image: 'elefante.png' },
    { letter: 'F', image: 'fogo.png' },
    { letter: 'G', image: 'gato.png' },
    { letter: 'H', image: 'helicoptero.png' },
    { letter: 'I', image: 'igreja.png' },
    { letter: 'J', image: 'jacare.png' },
    { letter: 'K', image: 'kiwi.png' },
    { letter: 'L', image: 'leao.png' },
    { letter: 'M', image: 'mae.png' },
    { letter: 'N', image: 'navio.png' },
    { letter: 'O', image: 'olhos.png' },
    { letter: 'P', image: 'papai.png' },
    { letter: 'Q', image: 'queijo.png' },
    { letter: 'R', image: 'rato.png' },
    { letter: 'S', image: 'sol.png' },
    { letter: 'T', image: 'tatu.png' },
    { letter: 'U', image: 'uva.png' },
    { letter: 'V', image: 'vaca.png' },
    { letter: 'W', image: 'wifi.png' },
    { letter: 'X', image: 'xarope.png' },
    { letter: 'Y', image: 'yoga.png' },
    { letter: 'Z', image: 'zebra.png' }
];

// Criar letras
letterData.forEach(item => {
    const letterDiv = document.createElement('div');
    letterDiv.textContent = item.letter;
    letterDiv.classList.add('letter');
    letterDiv.setAttribute('draggable', 'true');
    letterDiv.setAttribute('id', item.letter);

    letterDiv.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text', event.target.id);
    });

    lettersContainer.appendChild(letterDiv);
});

// Criar áreas de soltura
letterData.forEach(item => {
    const dropZone = document.createElement('div');
    dropZone.classList.add('drop-zone');
    dropZone.setAttribute('data-letter', item.letter);

    const img = document.createElement('img');
    img.setAttribute('src', item.image);
    img.setAttribute('alt', item.letter);

    dropZone.appendChild(img);

    dropZone.addEventListener('dragover', event => {
        event.preventDefault();
    });

    dropZone.addEventListener('drop', event => {
        event.preventDefault();
        const letterId = event.dataTransfer.getData('text');
        const letter = document.getElementById(letterId);

        if (dropZone.dataset.letter === letterId) {
            dropZone.appendChild(letter);
            letter.draggable = false;
            letter.style.backgroundColor = "#4CAF50"; // Verde para indicar acerto
            correctSound.play();
            message.textContent = "Parabéns! Você acertou!";
        } else {
            wrongSound.play();
            message.textContent = "Ops! Tente novamente!";
        }
    });

    dropAreasContainer.appendChild(dropZone);
});
