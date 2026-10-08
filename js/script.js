const phrases = [
    "Robotics Engineer",
    "Perception Researcher",
    "ML Engineer",
    "Humanoid Robots Researcher",
    "CV Engineer",
];

const typed = document.getElementById("typed");

let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {
        typed.textContent =
            currentPhrase.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentPhrase.length) {
            deleting = true;

            setTimeout(typeEffect, 1800);
            return;
        }

    } else {
        typed.textContent =
            currentPhrase.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;
            phraseIndex =
                (phraseIndex + 1) % phrases.length;
        }
    }

    const speed = deleting ? 45 : 80;

    setTimeout(typeEffect, speed);
}

typeEffect();