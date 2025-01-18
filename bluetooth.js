export async function initializeBluetooth({ onMessage, onConnectionStatusChange }) {
  class BluetoothConnection {
    constructor() {
      this.device = null;
      this.characteristic = null;
    }

    async connect() {
      try {
        this.device = await navigator.bluetooth.requestDevice({
          filters: [{ services: ['heart_rate'] }] // Replace with your service UUID
        });

        const server = await this.device.gatt.connect();
        const service = await server.getPrimaryService('heart_rate'); // Replace with your service UUID
        this.characteristic = await service.getCharacteristic('heart_rate_measurement'); // Replace with your characteristic UUID

        await this.characteristic.startNotifications();
        this.characteristic.addEventListener('characteristicvaluechanged', 
          (event) => {
            const value = new TextDecoder().decode(event.target.value);
            onMessage(value);
          });

        onConnectionStatusChange('Conectado via Bluetooth');
      } catch (error) {
        console.error('Bluetooth Error:', error);
        onConnectionStatusChange('Erro na conexão Bluetooth');
        throw error;
      }
    }

    async sendMessage(message) {
      if (this.characteristic) {
        const encoder = new TextEncoder();
        const data = encoder.encode(message);
        await this.characteristic.writeValue(data);
      } else {
        throw new Error('Característica Bluetooth não está pronta');
      }
    }
  }

  const connection = new BluetoothConnection();
  await connection.connect();
  return connection;
}