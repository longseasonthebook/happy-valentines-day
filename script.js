document.addEventListener("DOMContentLoaded", function () {
    const flowerContainer = document.getElementById('flowerContainer');
    const heartsContainer = document.getElementById('heartsContainer');
    const numFlowers = 200; // Number of flowers to generate
    const numHearts = 50; // Number of hearts to generate

    // Generate flowers
    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.animationDelay = `${Math.random() * 2}s`; // Random delay for sprouting effect
        flower.style.animationDuration = `${2 + Math.random() * 2}s`; // Random sway speed
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.top = `${Math.random() * 100}%`;
        flowerContainer.appendChild(flower);
    }

    // Generate initial hearts
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.animationDelay = `${Math.random() * 2}s`; // Random delay for floating effect
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heartsContainer.appendChild(heart);
    }

    // Add interactive hearts on click/tap
    document.addEventListener('click', function (event) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${event.clientX}px`;
        heart.style.top = `${event.clientY}px`;
        heart.style.animation = 'float 3s ease-in-out, fadeIn 0.5s ease-in-out';
        heartsContainer.appendChild(heart);

        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, 3000); // Match the duration of the float animation
    });
});