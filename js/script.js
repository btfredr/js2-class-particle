import Particle from "./particle.js";

const myParticle = new Particle(100, 100, 0, 0);

const particles = [];

for (let index = 0; index < 250; index++) {
    const posX = Math.random() * 10 + 200;
    const posY = Math.random() * 10 + 200;
    const speedX = Math.random() * 10 - 3;
    const speedY = Math.random() * 10 - 3;
    const size = Math.random() * 10 + 3;
    const newParticle = new Particle(posX, posY, speedX, speedY, size);
    particles.push(newParticle);
}

setInterval(function () {
    particles.forEach(function (particle) {
        particle.update();
    });
}, 33);

document.addEventListener("keydown", function (event) {
    console.log("this key has been pressed: " + event.key);
    const key = event.key;

    if (key === "w") {
        console.log("go up!");
    }
    if (key === "a") {
        console.log("go left!");
    }
    if (key === "s") {
        console.log("go down!");
    }
    if (key === "d") {
        console.log("go rightds!");
    }
});
