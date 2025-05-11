
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

document.addEventListener('DOMContentLoaded', () => {
    const text = "Hiii!";
    const speed = 150;
    const typewriter = document.getElementById('typewriter');
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriter.innerHTML = text.substring(0, index + 1) + '&nbsp;';
            index++;
            setTimeout(type, speed);
        }
    }

    type();
});

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lbImg    = lightbox.querySelector('.lightbox-img');
    const lbTitle  = lightbox.querySelector('.lightbox-title');
    const lbDesc   = lightbox.querySelector('.lightbox-desc');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    const clickSound = document.getElementById('image-click-sound');
    clickSound.volume = 0.3;

    document.querySelectorAll('.thumb').forEach(btn => {
        btn.addEventListener('click', () => {
            clickSound.currentTime = 0;
            clickSound.play().catch(_=>{});
            const img = btn.querySelector('img');
            lbImg.src           = img.src;
            lbImg.alt           = img.alt;
            lbTitle.textContent = btn.dataset.title;
            lbDesc.textContent  = btn.dataset.desc;
            lightbox.classList.remove('hidden');
        });
    });

    closeBtn.addEventListener('click', () => lightbox.classList.add('hidden'));
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) lightbox.classList.add('hidden');
    });
    document.addEventListener('keyup', e => {
        if (e.key === 'Escape') lightbox.classList.add('hidden');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const muteBtn    = document.getElementById('mute-toggle');
    const icon    = muteBtn.querySelector('i');

    let muted = localStorage.getItem('soundMuted') === 'true';

    function applyMute() {
        document.querySelectorAll('audio').forEach(a => a.muted = muted);

        if (muted) {
            icon.classList.replace('fa-volume-high', 'fa-volume-xmark');
        } else {
            icon.classList.replace('fa-volume-xmark', 'fa-volume-high');
        }
    }

    applyMute();

    muteBtn.addEventListener('click', () => {
        muted = !muted;
        localStorage.setItem('soundMuted', muted);
        applyMute();
    });

});
