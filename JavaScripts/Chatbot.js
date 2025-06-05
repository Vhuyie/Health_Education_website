
// Get references to DOM elements used in the chat
     const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

// Predefined health-related options and responses
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

// Adds a message to the chat (either from user or bot)
    function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', isUser ? 'user-message' : 'bot-message');

// Adds a timestamp to the message
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    messageDiv.innerHTML = `<div>${text.replace(/\n/g, "<br>")}</div><div class="timestamp">${timestamp}</div>`;

// Append the message to the chat window        
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
 
// Shows all predefined health options as clickable buttons
    function showOptions() {
      const optionsDiv = document.createElement('div');
      optionsDiv.classList.add('options-container');
        
// Create a button for each health option
      healthOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option.title;

// When an option is clicked, show the related response
        btn.onclick = () => {
          addMessage(option.title, true);  // user message
          setTimeout(() => {
            addMessage(option.response, false);  // bot reply

// If the option includes a link, add a button for it
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
              setTimeout(showOptions, 800); // Show options again after reply
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

// Handles sending a user message and generating a bot response
    function sendMessage() {
      const text = userInput.value.trim();
      if (text) {
        addMessage(text, true); // Add user message
        userInput.value = '';  // Clear input

// Respond to specific keywords          
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

// Event listeners for send button and pressing Enter key
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });

// Initial greeting and options shown on page load
    setTimeout(() => {
      addMessage("Hello! I'm your health assistant. How can I help you today? Here are some options:", false);
      showOptions();
    }, 500);
