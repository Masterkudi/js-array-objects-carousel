const images = [
    {
        image: 'assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const Carousel = {
    imagesContainer: document.querySelector(".marvel-container"),
    thumbsContainer: document.querySelector(".marvel-thumbs-container"),
    btnNext: document.getElementById("carousel-next-btn"),
    btnPrev: document.getElementById("carousel-prev-btn"),
    currentImgIndex: 0, // Aggiungo l'indice dell'immagine corrente

    renderImages: function () {
        this.imagesContainer.innerHTML = ""; // Pulisce il contenitore delle immagini prima di aggiungerle nuovamente
        images.forEach((singleImageObj, i) => { // Aggiungo l'indice i nella funzione forEach
            const div = document.createElement("div");
            div.classList.add("marvel-image-container"); // Usa una classe diversa per i div delle immagini
            div.innerHTML = `<img src="${singleImageObj.image}" alt="" class="marvel-image">`;

            if (i === this.currentImgIndex) {
                div.classList.add("active");
            }

            this.imagesContainer.append(div);
        });
    },
};

Carousel.renderImages(); // Chiamo il metodo per renderizzare le immagini iniziali
