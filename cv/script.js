document.addEventListener("DOMContentLoaded", function () {
    // Get all progress bars
    const progressBars = document.querySelectorAll('.skills .progress-bar');

    // Define the target widths for each progress bar
    const targetWidths = {
        '.networking': '30%',
        '.html5': '60%',
        '.css': '50%',
        '.javascript': '50%',
        '.english': '60%',
        '.german': '40%'
    };

    // Apply animations to each progress bar
    progressBars.forEach(progressBar => {
        const skillClass = Array.from(progressBar.classList).find(className => className.startsWith('progress-bar-'));
        const targetWidth = targetWidths[skillClass];

        // Use the Web Animations API to animate the width
        progressBar.animate(
            { width: [0, targetWidth] },
            { duration: 1500, easing: 'ease-in-out', fill: 'forwards' }
        );
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});