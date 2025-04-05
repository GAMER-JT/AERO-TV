/* Estilos generales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #6d28d9;
}

h2 {
  margin-bottom: 15px;
  color: #4c1d95;
}

/* Estilos del reproductor de video */
.video-player-container {
  margin-bottom: 30px;
}

#video-player {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

#main-video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Información del canal */
.channel-info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px;
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  z-index: 10;
}

#channel-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 4px;
  margin-right: 12px;
}

.channel-info h2 {
  font-size: 18px;
  margin-bottom: 2px;
  color: white;
}

.channel-info p {
  font-size: 14px;
  opacity: 0.8;
}

#info-button {
  margin-left: auto;
}

/* Indicador EN VIVO */
.live-indicator {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #ef4444;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.live-dot {
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  margin-right: 6px;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}

/* Controles de video */
.video-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;
}

#video-player:hover .video-controls {
  opacity: 1;
}

.progress-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

#progress-bar {
  flex: 1;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  outline: none;
  margin-right: 10px;
}

#progress-bar::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background: #8b5cf6;
  border-radius: 50%;
  cursor: pointer;
}

#time-display {
  font-size: 12px;
  white-space: nowrap;
}

.controls-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-controls,
.right-controls {
  display: flex;
  align-items: center;
}

.control-button {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.control-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.volume-container {
  display: flex;
  align-items: center;
  position: relative;
}

.volume-slider {
  width: 0;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  outline: none;
  transition: width 0.2s;
  overflow: hidden;
}

.volume-container:hover .volume-slider {
  width: 80px;
  margin-left: 10px;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background: #8b5cf6;
  border-radius: 50%;
  cursor: pointer;
}

/* Overlay para móviles */
.mobile-play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.mobile-play-overlay.visible {
  opacity: 1;
  pointer-events: auto;
}

.play-button-large {
  width: 80px;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
}

/* Spinner de carga */
.loading-spinner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
}

.spinner {
  width: 64px;
  height: 64px;
  border: 4px solid transparent;
  border-top-color: #8b5cf6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Lista de canales */
.channels-section {
  margin-top: 30px;
}

.channels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.channel-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.channel-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.channel-thumbnail {
  position: relative;
  height: 112px;
  overflow: hidden;
}

.channel-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.channel-thumbnail .live-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #ef4444;
  color: white;
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.channel-thumbnail .live-badge::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 50%;
  margin-right: 4px;
  animation: pulse 1.5s infinite;
}

.channel-details {
  padding: 12px;
}

.channel-details h3 {
  font-size: 16px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.channel-details p {
  font-size: 12px;
  color: #666;
}

/* Modal */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
}

.modal-content {
  background-color: white;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
}

.modal-header {
  padding: 16px;
  background: linear-gradient(to right, #6d28d9, #4f46e5);
  color: white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  font-size: 18px;
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.modal-body {
  padding: 20px;
}

.modal-channel-info {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

#modal-channel-logo {
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 4px;
}

.modal-channel-info p {
  margin-bottom: 8px;
}

.modal-footer {
  padding: 16px;
  border-top: 1px solid #eee;
  text-align: right;
}

.button {
  background-color: #6d28d9;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #5b21b6;
}

/* Responsive */
@media (max-width: 768px) {
  .channels-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .control-button {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }

  .volume-container:hover .volume-slider {
    width: 60px;
  }

  .play-button-large {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .channels-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .channel-info h2 {
    font-size: 16px;
  }

  .channel-info p {
    font-size: 12px;
  }

  #time-display {
    display: none;
  }
}

