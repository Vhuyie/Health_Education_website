function showPage(page) {
    const pages = ['homePage', 'servicesPage', 'lungileSteps', 'gontseSteps'];
    pages.forEach(p => {
      document.getElementById(p).classList.remove('active');
      document.getElementById(p).classList.add('instructions');
    });
    if (page === 'home') {
      document.getElementById('homePage').classList.add('active');
    } else if (page === 'services') {
      document.getElementById('servicesPage').classList.add('active');
    }
  }

  function beginStory(story) {
    const confirmed = confirm("Do you want to start this story?");
    if (!confirmed) return;

    showPage('');
    if (story === 'lungile') {
      document.getElementById('lungileSteps').classList.add('active');
      resetSteps('lungile');
    } else if (story === 'gontse') {
      document.getElementById('gontseSteps').classList.add('active');
      resetSteps('gontse');
    }
  }

  function resetSteps(story) {
    const steps = {
      lungile: ['lungileStep1', 'lungileStep2', 'lungileStep3', 'lungileStep4', 'lungileStep5'],
      gontse: ['gontseStep1', 'gontseStep2', 'gontseStep3', 'gontseStep4', 'gontseStep5']
    }[story];
    steps.forEach((stepId, index) => {
      const el = document.getElementById(stepId);
      if (index === 0) {
        el.classList.add('active');
        el.classList.remove('instructions');
      } else {
        el.classList.remove('active');
        el.classList.add('instructions');
      }
    });
  }

  function saveName(story) {
    let inputId = story + 'Name';
    let name = document.getElementById(inputId).value.trim();

    if (name === '') {
      const usePrompt = confirm("No name entered. Would you like to type your name using a prompt?");
      if (usePrompt) {
        name = prompt("Please enter your name:");
        if (!name || name.trim() === '') {
          alert("Name is required to continue.");
          return;
        }
        document.getElementById(inputId).value = name;
      } else {
        alert("Please enter your name in the input field to continue.");
        return;
      }
    }

    if (story === 'lungile') {
      document.getElementById('lungileUser').textContent = name;
      document.getElementById('lungileUser2').textContent = name;
    }

    if (story === 'gontse') {
  document.getElementById('gontseUser').textContent = name;
  document.getElementById('gontseUser2').textContent = name;
}


    nextStep(`${story}Step1`, `${story}Step2`);
  }

  function nextStep(currentId, nextId) {
    document.getElementById(currentId).classList.remove('active');
    document.getElementById(currentId).classList.add('instructions');
    document.getElementById(nextId).classList.add('active');
    document.getElementById(nextId).classList.remove('instructions');

    // Optional: update date
    if (nextId === 'lungileStep5') {
      const today = new Date().toLocaleDateString();
      document.getElementById('lungileDate').textContent = `Today’s date: ${today}`;
    }

    if (nextId === 'gontseStep5') {
  const today = new Date().toLocaleDateString();
  document.getElementById('gontseDate').textContent = `Today’s date: ${today}`;
}

  }

  function endStory() {
    alert('🎉 Thank you for learning about disease prevention! Returning to home page.');
    showPage('home');
  }

  function wrongChoice() {
    alert('⚠️ Ignoring the problem can lead to more people getting sick. Let’s make the safe choice!');
  }