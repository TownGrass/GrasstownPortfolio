
document.addEventListener('DOMContentLoaded', () => {
    const clickSound = document.getElementById('click-sound');
    const hoverSound = document.getElementById('hover-sound');

    clickSound.volume = 0.5;
    hoverSound.volume = 0.3;

    document.querySelectorAll('.link-to-sites')
        .forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                clickSound.currentTime = 0;
                clickSound.play().catch(err => console.warn('Play-Error:', err));

                clickSound.addEventListener('ended', () => {
                    window.location.href = link.href;
                }, { once: true });
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            });
        });

    const logo = document.querySelector('.logo-pfp');
    let confettiTriggered = false;

    logo.addEventListener('mouseover', () => {
        if (confettiTriggered) return;
        confettiTriggered = true;

        hoverSound.currentTime = 0;
        hoverSound.play().catch(err => {
            console.warn('Hover-Sound Error:', err);
        });

        confetti({
            scalar: 1.5,
            spread: 270,
            particleCount: 25,
            origin: { y: 0.4 },
            startVelocity: 35,
            shapes: ["image"],
            shapeOptions: {
                image: {
                    src: "images/star-svgrepo-com.svg",
                    replaceColor: true,
                    width: 32,
                    height: 40,
                }
            },
            colors: ["#3ab795", "#a0e8af", "#86baa1", "#edead0", "#ffcf56", "#4e878c"],
        });
    });
});
