element = document.getElementsByClassName('Gv1mTb-aTv5jf')[0] 
if (element.requestFullscreen) { 
    element.requestFullscreen(); 
} else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen(); 
} else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
} else if (element.msRequestFullscreen) {
    element.msRequestFullscreen(); 
}