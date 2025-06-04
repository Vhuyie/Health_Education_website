alert("You are using: " + navigator.userAgent);

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
  revealOnScroll(); // initial check

  // Form submission event
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Check built-in HTML5 validity
  const form = event.target;
  if (!form.checkValidity()) {
    alert("Please fill out all required fields correctly.");
    form.reportValidity(); // triggers browser's validation UI
    return;
  }
    // Validate checkbox group
  const checkboxes = document.querySelectorAll('input[name="topics"]:checked');
  if (checkboxes.length === 0) {
    alert("Please select at least one health topic.");
    return;
  }

  // Validate radio buttons (already using 'required' — good)
  const helpfulSelected = document.querySelector('input[name="helpful"]:checked');
  if (!helpfulSelected) {
    alert("Please select whether the videos were helpful.");
    return;
  }

 // Collect data 
    const name = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const favorite = document.getElementById('dropdown').value;

    // Basic feedback to user
    const feedback = document.getElementById('formMessage');
    feedback.textContent = `Thank you, ${name}! Your message has been received.`;
    feedback.style.color = "#2f855a";

    console.log("Form submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Topics:", Array.from(checkboxes).map(cb => cb.value));
    console.log("Helpful:", helpfulSelected.value);
    console.log("Favorite:", favorite);

    // Optionally clear the form
    event.target.reset();
  }

  // Handle field changes
  function handleInputChange(event) {
    console.log(`Changed: ${event.target.name} => ${event.target.value}`);
  }