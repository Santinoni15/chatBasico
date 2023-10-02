document.addEventListener("DOMContentLoaded", function () {
  // addEvent..permite configurar funções que vao ser chamadas quando um evento acontece
  //DOM acionado qnd HTML foi carregado e analisado, sem esperar pelo CSS, imagens, e subframes para encerrar o carregamento.
  const chatWindow = document.getElementById("chat-window");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");
  //busca la no html

  sendButton.addEventListener("click", function () {
    sendMessage();
    // envia mensagens
  });

  messageInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText !== "") {
      addMessage("sent", messageText);
      messageInput.value = "";
    }
  }

  function addMessage(type, text) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${type}`;
    messageElement.textContent = text;
    chatWindow.appendChild(messageElement);
  }
});
