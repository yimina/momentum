const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const body = document.querySelector("body");

function IMGselect(){
    const image = new Image();
    choseImage = images[Math.floor(Math.random()*images.length)];
    image.src = `img/${choseImage}`
    image.className = 'bgIMG';
    body.prepend(image);
}

IMGselect();


