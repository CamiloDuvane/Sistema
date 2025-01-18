import { initializeWebRTC } from './webrtc.js';
import { initializeBluetooth } from './bluetooth.js';
import { ChatUI } from './chat-ui.js';

class ChatApp {
  constructor() {
    this.ui = new ChatUI();
    this.connection = null;
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    document.getElementById('wifi-connect').addEventListener('click', () => this.connectWiFi());
    document.getElementById('bluetooth-connect').addEventListener('click', () => this.connectBluetooth());
    document.getElementById('send-button').addEventListener('click', () => this.sendMessage());
    document.getElementById('message-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
  }

  async connectWiFi() {
    try {
      this.connection = await initializeWebRTC({
        onMessage: (message) => this.ui.addMessage(message, false),
        onConnectionStatusChange: (status) => this.ui.updateConnectionStatus(status)
      });
      this.ui.updateConnectionStatus('Conectado via Wi-Fi');
    } catch (error) {
      console.error('Erro ao conectar via Wi-Fi:', error);
      this.ui.updateConnectionStatus('Erro na conexão Wi-Fi');
    }
  }

  async connectBluetooth() {
    try {
      this.connection = await initializeBluetooth({
        onMessage: (message) => this.ui.addMessage(message, false),
        onConnectionStatusChange: (status) => this.ui.updateConnectionStatus(status)
      });
      this.ui.updateConnectionStatus('Conectado via Bluetooth');
    } catch (error) {
      console.error('Erro ao conectar via Bluetooth:', error);
      this.ui.updateConnectionStatus('Erro na conexão Bluetooth');
    }
  }

  async sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    
    if (message && this.connection) {
      try {
        await this.connection.sendMessage(message);
        this.ui.addMessage(message, true);
        input.value = '';
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
      }
    }
  }
}

// Initialize the app
const app = new ChatApp();