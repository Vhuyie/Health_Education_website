    function toggleMenu() {
      document.getElementById("navButtons").classList.toggle("show");
    }
     const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    const healthOptions = [
      {
        title: "Weight Loss Diet Plan",
        response: "Here's a balanced weight loss plan:\n\nBreakfast: Oatmeal with berries\nLunch: Grilled chicken with quinoa and veggies\nDinner: Salmon with sweet potato and broccoli\nHydration: 8 glasses of water daily\nExercise: 30 mins cardio + strength training 5x/week"
      },
      {
        title: "Muscle Gain Diet Plan",
        response: "Here's a muscle building plan:\n\nBreakfast: Scrambled eggs with whole wheat toast\nLunch: Lean beef with brown rice and greens\nDinner: Grilled chicken with lentils\nSnacks: Greek yogurt, nuts, protein shakes\nExercise: Strength training 4-5x/week with progressive overload"
      },
      {
        title: "Heart-Healthy Diet",
        response: "Heart-healthy eating plan:\n\nFocus on omega-3s (salmon, walnuts)\nPlenty of leafy greens and colorful veggies\nAntioxidant-rich berries\nWhole grains instead of refined carbs\nLimit saturated fats and sodium\nInclude 30 mins of daily cardio"
      },
      {
        title: "Vegetarian Meal Plan",
        response: "Complete vegetarian nutrition:\n\nBreakfast: Chia pudding with almond milk\nLunch: Chickpea salad wrap with avocado\nDinner: Lentil curry with brown rice\nSnacks: Hummus with veggies, mixed nuts\nEnsure B12 and iron intake\nCombine grains + legumes for complete proteins"
      },
      {
        title: "Diabetes Management",
        response: "Blood sugar control tips:\n\nFocus on healthy fats and fiber\nChoose low glycemic index foods\nEat smaller, more frequent meals\nLimit processed sugars and refined carbs\nMonitor blood glucose regularly\nInclude daily physical activity"
      },
      {
        title: "Learn More about First Aid",
        response: "You can view our detailed First Aid Guide for emergencies and injuries.",
        link: "First-aid.html"
      }
    ];

    function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', isUser ? 'user-message' : 'bot-message');
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    messageDiv.innerHTML = `<div>${text.replace(/\n/g, "<br>")}</div><div class="timestamp">${timestamp}</div>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

    function showOptions() {
      const optionsDiv = document.createElement('div');
      optionsDiv.classList.add('options-container');
      healthOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option.title;
        btn.onclick = () => {
          addMessage(option.title, true);
          setTimeout(() => {
            addMessage(option.response, false);
            if (option.link) {
              const linkBtn = document.createElement('button');
              linkBtn.classList.add('option-btn');
              linkBtn.textContent = "Open First Aid Guide";
              linkBtn.onclick = () => window.location.href = option.link;
              const msg = document.createElement('div');
              msg.classList.add('message', 'bot-message');
              msg.appendChild(linkBtn);
              chatMessages.appendChild(msg);
              chatMessages.scrollTop = chatMessages.scrollHeight;
            } else {
              setTimeout(showOptions, 800);
            }
          }, 700);
        };
        optionsDiv.appendChild(btn);
      });
      const msg = document.createElement('div');
      msg.classList.add('message', 'bot-message');
      msg.appendChild(optionsDiv);
      chatMessages.appendChild(msg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function sendMessage() {
      const text = userInput.value.trim();
      if (text) {
        addMessage(text, true);
        userInput.value = '';
        setTimeout(() => {
          if (text.toLowerCase().includes('hello')) {
            addMessage("Hello there! How can I assist you with your health today?", false);
          } else if (text.toLowerCase().includes('thank')) {
            addMessage("You're welcome! Is there anything else you'd like to know?", false);
          } else {
            addMessage("Let me process that. In the meantime, you can choose from the options below:", false);
            showOptions();
          }
        }, 800);
      }
    }

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });

    setTimeout(() => {
      addMessage("Hello! I'm your health assistant. How can I help you today? Here are some options:", false);
      showOptions();
    }, 500);