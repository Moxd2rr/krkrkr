document.getElementById('showHearts').addEventListener('click', function() {
    // Create multiple hearts with animation
    for (let i = 0; i < 500; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-floating');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${i * 0.1}s`;
        document.querySelector('.heart-container').appendChild(heart);
    }const music = document.getElementById('backgroundMusic');
    music.play();
});

