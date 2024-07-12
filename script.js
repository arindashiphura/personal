// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="index.html"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.sliding-text');
    let index = 0;

    function showNextText() {
        texts.forEach((text, i) => {
            text.classList.remove('active');
            if (i === index) {
                text.classList.add('active');
            }
        });

        index = (index + 1) % texts.length;
    }

    // Show the first text initially
    showNextText();

    // Change text every 3 seconds
    setInterval(showNextText, 3000);
});
