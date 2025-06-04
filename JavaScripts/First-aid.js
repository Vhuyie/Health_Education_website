 function toggleInstructions(id) {
      const instructions = document.getElementById(id);
      const isVisible = instructions.style.display === 'block';
      document.querySelectorAll('.instructions').forEach(div => {
        if(div.id !== id) {
          div.style.display = 'none';
          clearSlider(div);
        }
      });
      if (isVisible) {
        instructions.style.display = 'none';
        clearSlider(instructions);
      } else {
        instructions.style.display = 'block';
        setupSlider(instructions);
      }
    }

    function clearSlider(container) {
      const sliderDiv = container.querySelector('.slider');
      sliderDiv.innerHTML = '';
      if(sliderDiv.sliderInterval) {
        clearInterval(sliderDiv.sliderInterval);
      }
    }

    function setupSlider(container) {
      const sliderDiv = container.querySelector('.slider');
      const images = JSON.parse(container.dataset.images);
      if(images.length === 0) return;

      let current = 0;
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
        imgElem.src = images[current];
      }

      prevBtn.onclick = () => showImage(current - 1);
      nextBtn.onclick = () => showImage(current + 1);
    }

    function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }