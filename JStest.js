function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

let progress = 0;

      function updateProgressBar() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][id^="sc_check"]');
    const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
    progress = (checkedCheckboxes.length / checkboxes.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';

      if (progress === 90) {
       progressBar.innerText = 'Secured';
    } else {
      progressBar.innerText = ''; // Clear the message if not 100%
    }
  }

  function changeImage() {
    // Get the image element by its ID
    var imgElement = document.getElementById('myImage');

    // Array of image sources
    var imageSources = ['img1.', 'img2.jpg', 'image3.webp'];

    // Get the current source of the image
    var currentSource = imgElement.src;

    // Find the index of the current source in the array
    var currentIndex = imageSources.indexOf(currentSource);

    // Calculate the next index, considering the array's length
    var nextIndex = (currentIndex + 1) % imageSources.length;

    // Set the new source for the image
    imgElement.src = imageSources[nextIndex];
  }