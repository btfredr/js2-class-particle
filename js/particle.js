// making a function used to create particles and exporting it
export default class Particle {

    constructor(positionX, positionY, speedX, speedY, size) {
        console.log("Particle created");

        this.positionX = positionX;
        this.positionY = positionY;
        this.speedY = speedX;
        this.speedX = speedY;

        this.elem = document.createElement("div");
        this.elem.classList.add("particle");
        this.elem.style.position = "absolute";

        this.elem.style.top = this.positionX + "px";
        this.elem.style.left = this.positionY + "px";
        this.elem.style.width = size;
        this.elem.style.height = size;


        document.body.appendChild(this.elem);
    }

    update() {
        this.positionX += this.speedX;
        this.positionY += this.speedY;

        this.elem.style.top = this.positionX + "px";
        this.elem.style.left = this.positionY + "px";

        const friction = 0.99;

        this.speedX *= friction;
        this.speedY *= friction;
    }
}