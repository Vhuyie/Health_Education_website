    const chatBox = document.getElementById("chatBox");

    const users = {
      Bokang: {
        name: "Bokang",
        img: "https://th.bing.com/th/id/OIP.KgansTbaNbmreLaXoMUdCQHaHa?rs=1",
        side: "left"
      },
      Vutomi: {
        name: "Vutomi",
        img: "https://th.bing.com/th/id/R.f74b7b3004edb4a8108977ca864d798c?rik=NHxPaVCF2nLKvA&pid=ImgRaw&r=0",
        side: "right"
      }
    };

    function appendMessage(userKey, text) {
      const user = users[userKey];
      const msgHTML = `
        <div class="msg ${user.side}-msg">
          <div class="msg-img" style="background-image: url(${user.img})"></div>
          <div class="msg-bubble">
            <div class="msg-info">
              <div class="msg-info-name">${user.name}</div>
              <div class="msg-info-time">${new Date().toLocaleTimeString()}</div>
            </div>
            <div class="msg-text">${text}</div>
          </div>
        </div>
      `;
      chatBox.insertAdjacentHTML("beforeend", msgHTML);
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    document.getElementById("formBokang").addEventListener("submit", e => {
      e.preventDefault();
      const input = document.getElementById("inputBokang");
      const text = input.value.trim();
      if (text) {
        appendMessage("Bokang", text);
        input.value = "";
      }
    });

    document.getElementById("formVutomi").addEventListener("submit", e => {
      e.preventDefault();
      const input = document.getElementById("inputVutomi");
      const text = input.value.trim();
      if (text) {
        appendMessage("Vutomi", text);
        input.value = "";
      }
    });