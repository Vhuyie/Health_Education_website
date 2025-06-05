// Toggles the visibility of instruction panels and manages image sliders
function toggleInstructions(id) {
      const instructions = document.getElementById(id);
      const isVisible = instructions.style.display === 'block';

 
  // Hide all other instruction panels and clear their sliders
      document.querySelectorAll('.instructions').forEach(div => {
        if(div.id !== id) {
          div.style.display = 'none';
          clearSlider(div);
        }
      });
  // Toggle the selected instruction panel
      if (isVisible) {
        instructions.style.display = 'none';
        clearSlider(instructions); // Stop and clear the slider if panel is hidden
      } else {
        instructions.style.display = 'block';
        setupSlider(instructions); // Initialize slider if panel is shown
      }
    }

// Clears the image slider in a given container
    function clearSlider(container) {
      const sliderDiv = container.querySelector('.slider');
      sliderDiv.innerHTML = '';  // Remove all slider content


  // If the slider has an active interval, stop it     
      if(sliderDiv.sliderInterval) {
        clearInterval(sliderDiv.sliderInterval);
      }
    }

// Initializes an image slider inside the given container
    function setupSlider(container) {
      const sliderDiv = container.querySelector('.slider');
      const images = JSON.parse(container.dataset.images);  // Load image URLs from data attribute
      if(images.length === 0) return;  // Exit if there are no images

      let current = 0;

// Set up initial image and control buttons     
      sliderDiv.innerHTML = `
        <img src="${images[0]}" class="active" alt="Instruction Image" />
        <div class="slider-controls">
          <button id="prevBtn">Prev</button>
          <button id="nextBtn">Next</button>
        </div>
      `;

      const imgElem = sliderDiv.querySelector('img');
      const prevBtn = sliderDiv.querySelector('#prevBtn');
      const nextBtn = sliderDiv.querySelector('#nextBtn');

      function showImage(index) {
        current = (index + images.length) % images.length;
        imgElem.src = images[current]; // Set image source

      }

      prevBtn.onclick = () => showImage(current - 1);
      nextBtn.onclick = () => showImage(current + 1);
    }

// Initializes the Google Translate widget on the page
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }
