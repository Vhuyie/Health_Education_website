// Reveal boxes on scroll
    const boxes = document.querySelectorAll('.content-box');
    const revealOnScroll = () => {
      boxes.forEach(box => {
        if (box.getBoundingClientRect().top < window.innerHeight - 50) {
          box.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    // Toggle instruction sections
    function toggleSection(btn, id) {
      const sec = document.getElementById(id);
      const showing = sec.style.display === 'block';
      sec.style.display = showing ? 'none' : 'block';
      btn.textContent = showing ? 'View Info' : 'Hide Info';
    }

    // Slideshow logic
    const intervals = new Map();
    function showSlide(slideshow, i) {
      const imgs = slideshow.querySelectorAll('img');
      const cap  = slideshow.querySelector('figcaption');
      imgs.forEach((img, idx) => img.style.display = idx===i?'block':'none');
      cap.textContent = imgs[i].alt;
      slideshow.dataset.index = i;
    }
    function toggleSlideshow(btn, pause) {
      const ss = btn.closest('.slideshow');
      const pauseBtn = ss.querySelector('.pause');
      const playBtn  = ss.querySelector('.play');
      if (pause) {
        clearInterval(intervals.get(ss));
        intervals.delete(ss);
        pauseBtn.style.display = 'none';
        playBtn.style.display  = 'inline-block';
      } else {
        if (!intervals.has(ss)) {
          const rotate = () => {
            let idx = (parseInt(ss.dataset.index)+1) % ss.querySelectorAll('img').length;
            showSlide(ss, idx);
          };
          intervals.set(ss, setInterval(rotate, 3000));
        }
        pauseBtn.style.display = 'inline-block';
        playBtn.style.display  = 'none';
      }
    }
    // Init slideshows
    document.querySelectorAll('.slideshow').forEach(ss => {
      showSlide(ss, 0);
      toggleSlideshow(ss, false);
    });

    // Language selector stub
    document.getElementById('languageSelector').addEventListener('change', e => {
      alert(`Selected: ${e.target.value.toUpperCase()}`);
    });