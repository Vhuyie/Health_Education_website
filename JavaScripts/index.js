const greeting = document.getElementById('greeting');

function getGreeting(name) {
  try {
    const hour = new Date().getHours();
    let baseGreeting = "";

    if (hour < 12) {
      baseGreeting = "Good Morning";
    } else if (hour < 18) {
      baseGreeting = "Good Afternoon";
    } else {
      baseGreeting = "Good Evening";
    }

    return `${baseGreeting}, ${name}! Welcome to HealthConnect.`;
  } catch (error) {
    console.error("Error generating greeting:", error);
    return "Welcome to HealthConnect!";
  }
}

function animateText(text, element, delay = 50) {
  try {
    let i = 0;
    element.textContent = '';
    const interval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, delay);
  } catch (error) {
    console.error("Error animating text:", error);
    element.textContent = text; // Fallback
  }
}

function detectBrowser() {
  try {
    const userAgent = navigator.userAgent;
    let browser = "Unknown";

    if (userAgent.includes("Chrome") && !userAgent.includes("Edg") && !userAgent.includes("OPR")) {
      browser = "Google Chrome";
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
      browser = "Safari";
    } else if (userAgent.includes("Firefox")) {
      browser = "Mozilla Firefox";
    } else if (userAgent.includes("Edg")) {
      browser = "Microsoft Edge";
    } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
      browser = "Opera";
    } else if (userAgent.includes("Trident") || userAgent.includes("MSIE")) {
      browser = "Internet Explorer";
    }

    console.log("Browser Detected:", browser);
    return browser;
  } catch (error) {
    console.error("Error detecting browser:", error);
    return "Unknown";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    let name = prompt("What's your name?");
    if (!name || name.trim() === "") {
      name = "Guest";
    }
    const text = getGreeting(name.trim());
    if (greeting) {
      animateText(text, greeting);
    } else {
      console.warn("Greeting element not found.");
    }
  } catch (error) {
    console.error("Error in DOMContentLoaded handler:", error);
  }
});

window.onload = () => {
  try {
    const browserName = detectBrowser();
    alert("You are using: " + browserName);
  } catch (error) {
    console.error("Error in window.onload:", error);
  }
};
