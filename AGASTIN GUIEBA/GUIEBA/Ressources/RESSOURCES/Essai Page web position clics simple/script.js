document.addEventListener('DOMContentLoaded', function() {
    var imageContainer = document.getElementById('imageContainer');
  
    imageContainer.addEventListener('click', function(event) {
      var image = document.getElementById('image');
  
      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
    });
  });
  