// Show the button when the user scrolls down 50% of the total document height
window.onscroll = function () {
    const button = document.querySelector('.go-to-top');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;

    // Check if the user has scrolled down 50% of the document height
    if (scrollPosition > scrollHeight / 2) {
        button.classList.add('show');  // Show the button
    } else {
        button.classList.remove('show');  // Hide the button
    }
};