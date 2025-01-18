export class ChatUI {
  constructor() {
    this.chatArea = document.getElementById('chat-area');
    this.statusText = document.getElementById('status-text');
    this.statusDot = document.querySelector('.status-dot');
  }

  addMessage(text, isSent) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isSent ? 'sent' : 'received'}`;
    messageDiv.textContent = text;
    
    this.chatArea.appendChild(messageDiv);
    this.chatArea.scrollTop = this.chatArea.scrollHeight;
  }

  updateConnectionStatus(status) {
    this.statusText.textContent = status;
    this.statusDot.classList.toggle('connected', 
      status.includes('Conectado'));
  }
}