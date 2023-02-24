function moveImage(event, element) {
  // Get the image element within the current hovered element
  var img = element.querySelector('img');
  if (img) {
    // Calculate the position of the image based on the position of the mouse cursor
    var x = event.clientX - (img.width / 2);
    var y = event.clientY - (img.height / 2);
    // Set the new position of the image
    img.style.left = x + 'px';
    img.style.top = y + 'px';
  }
}
// body fadein effect
window.onload = function() {
  document.querySelector('body').classList.add('loaded');
};
