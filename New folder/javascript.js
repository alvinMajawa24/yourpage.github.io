// script.js

const noButton = document.getElementById("noButton");
const backgroundImage = document.querySelector('body');

// Function to handle mouse movement
function handleMouseMove(event) {
    // Calculate the distance from the mouse to the button
    const buttonRect = noButton.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Get the dimensions of the background image
    const backgroundImageRect = backgroundImage.getBoundingClientRect();
    const backgroundImageWidth = backgroundImageRect.width;
    const backgroundImageHeight = backgroundImageRect.height;

    // Calculate the new position of the button within the bounds of the background image
    let newX = mouseX - (mouseX - buttonRect.right) * 0.00000005;
    let newY = mouseY - (mouseY - buttonRect.bottom) * 0.000000005;

    // Ensure the button stays within the bounds of the background image
    newX = Math.max(0, Math.min(newX, backgroundImageWidth - buttonRect.width));
    newY = Math.max(0, Math.min(newY, backgroundImageHeight - buttonRect.height));

    // Set the new position of the button
    noButton.style.transform = `translate(${newX}px, ${newY}px)`;
}

// Add mousemove event listener to the document
document.addEventListener("mousemove", handleMouseMove);
