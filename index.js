/**
 * Attempts to request fullscreen mode for a video element in a cross-browser compatible way.
 * @param {HTMLVideoElement} videoElement - The video element to request fullscreen for.
 */
function requestFullscreen(videoElement) {
    // Check if the browser supports the Fullscreen API
    if (videoElement.requestFullscreen) {
        // Request fullscreen mode for the video element
        videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
        // For Firefox, request fullscreen mode
        videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) {
        // For WebKit-based browsers (Chrome, Safari), request fullscreen mode with optional keyboard input
        videoElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (videoElement.msRequestFullscreen) {
        // For Internet Explorer and Edge, request fullscreen mode
        videoElement.msRequestFullscreen();
    }
}

// Get the first video element on the webpage
const videoElement = document.getElementsByTagName('video')[0];

// Request fullscreen for the video element
if (videoElement) {
    requestFullscreen(videoElement);
}