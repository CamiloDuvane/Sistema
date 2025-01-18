export async function initializeWebRTC({ onMessage, onConnectionStatusChange }) {
  const configuration = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' }
    ]
  };

  class WebRTCConnection {
    constructor() {
      this.peerConnection = new RTCPeerConnection(configuration);
      this.dataChannel = null;
      this.setupPeerConnection();
    }

    async setupPeerConnection() {
      this.dataChannel = this.peerConnection.createDataChannel('chat');
      this.setupDataChannel();

      this.peerConnection.ondatachannel = (event) => {
        this.dataChannel = event.channel;
        this.setupDataChannel();
      };

      try {
        const offer = await this.peerConnection.createOffer();
        await this.peerConnection.setLocalDescription(offer);
        // Here you would typically send the offer to the other peer
        // through your signaling server
      } catch (error) {
        console.error('Error creating offer:', error);
      }
    }

    setupDataChannel() {
      this.dataChannel.onmessage = (event) => {
        onMessage(event.data);
      };

      this.dataChannel.onopen = () => {
        onConnectionStatusChange('Conectado via Wi-Fi');
      };

      this.dataChannel.onclose = () => {
        onConnectionStatusChange('Desconectado');
      };
    }

    async sendMessage(message) {
      if (this.dataChannel && this.dataChannel.readyState === 'open') {
        this.dataChannel.send(message);
      } else {
        throw new Error('Canal de dados não está pronto');
      }
    }
  }

  return new WebRTCConnection();
}