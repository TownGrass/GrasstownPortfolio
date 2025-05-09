var defaults = {
    scalar: 1.5,
    spread: 270,
    particleCount: 25,
    origin: { y: 0.4},
    startVelocity: 35,
};

let confettiTriggered = false;

    function triggerConfetti() {
        if(confettiTriggered) return;
        confettiTriggered = true;
    confetti({
        ...defaults,
        shapes: ["image"],
        shapeOptions: {
            image: {
                src: "images/star-svgrepo-com.svg",
                replaceColor: true,
                width: 32,
                height: 40,
            },
        },
        colors: ["#3ab795", "#a0e8af", "#86baa1", "#edead0", "#ffcf56", "#4e878c"],
    });
}
