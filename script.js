// Lista de canales disponibles
const availableChannels = [
  {
    id: 1,
    name: "Sony Novelas",
    logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-m/a3bd552eca6645942a60a053fe61fafb.webp",
    country: "Series",
    genre: "Series",
    currentShow: "Estados Unidos",
    language: "Español",
    streamUrl:
      "https://a89829b8dca2471ab52ea9a57bc28a35.mediatailor.us-east-1.amazonaws.com/v1/master/0fb304b2320b25f067414d481a779b77db81760d/CanelaTV_SonyCanalNovelas/playlist.m3u8",
    isLive: true,
    category: "Series",
    viewCount: 12500,
  },
  {
    id: 2,
    name: "Telemundo Miami",
    logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-m/70ef4b19ce0f5b973ff48dffd540d3d8.webp",
    country: "Noticias",
    genre: "Noticias",
    currentShow: "Estados Unidos",
    language: "Español",
    streamUrl:
      "https://d2kowtvrzzi7ps.cloudfront.net/manifest/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod_default_nbc/5a817dba-a6f1-4dac-9871-91e9e76e1762/2.m3u8",
    isLive: true,
    category: "Noticias",
    viewCount: 18700,
  },
  {
    id: 3,
    name: "Canela Deportes",
    logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-m/3a49e44efce01bea59de8af9e253695f.webp",
    country: "Deportes",
    genre: "Deportes",
    currentShow: "Estados Unidos",
    language: "Español",
    streamUrl: "https://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",
    isLive: true,
    category: "Deportes",
    viewCount: 15300,
  },
  {
    id: 4,
    name: "3ABN KIDS",
    logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-m/42de800d69d78117b03852bac7ae3818.webp",
    country: "Infantil",
    genre: "Infantil",
    currentShow: "Estados Unidos",
    language: "English",
    streamUrl: "https://3abn.bozztv.com/3abn2/Kids_live/smil:Kids_live.smil/playlist.m3u8",
    isLive: true,
    category: "Infantil",
    viewCount: 9800,
  },
  {
    id: 5,
    name: "FOX Sports",
    logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-m/5c2f33d5ee4ec2d82edb58610f2b0ff7.webp",
    country: "Deportes",
    genre: "Deportes",
    currentShow: "Estados Unidos",
    language: "Español",
    streamUrl:
      "https://live-news-manifest.tubi.video/live-news-manifest/csm/extlive/tubiprd01,Fox-Sports-Espanol2.m3u8",
    isLive: true,
    category: "Deportes",
    viewCount: 25600,
  },
  {
    id: 6,
    name: "DW Español",
    logo: "https://static.dw.com/image/69105274_6.jpg",
    country: "Noticias",
    genre: "Noticias",
    currentShow: "Alemania",
    language: "Español",
    streamUrl: "https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8",
    isLive: true,
    category: "Noticias",
    viewCount: 14200,
  },
]

// Elementos del DOM
const videoElement = document.getElementById("main-video")
const playPauseButton = document.getElementById("play-pause")
const muteButton = document.getElementById("mute-button")
const volumeSlider = document.getElementById("volume-slider")
const progressBar = document.getElementById("progress-bar")
const timeDisplay = document.getElementById("time-display")
const fullscreenButton = document.getElementById("fullscreen-button")
const favoriteButton = document.getElementById("favorite-button")
const infoButton = document.getElementById("info-button")
const loadingSpinner = document.getElementById("loading-spinner")
const mobilePlayOverlay = document.getElementById("mobile-play-overlay")
const channelsGrid = document.getElementById("channels-grid")
const infoModal = document.getElementById("info-modal")
const closeModalButton = document.getElementById("close-modal")
const modalCloseButton = document.getElementById("modal-close-button")

// Variables de estado
let isPlaying = false
let isMuted = false
let currentChannel = availableChannels[0]
let favorites = []

// Cargar favoritos desde localStorage
function loadFavorites() {
  const storedFavorites = localStorage.getItem("favoriteChannels")
  if (storedFavorites) {
    favorites = JSON.parse(storedFavorites)
  }
  updateFavoriteButton()
}

// Guardar favoritos en localStorage
function saveFavorites() {
  localStorage.setItem("favoriteChannels", JSON.stringify(favorites))
}

// Verificar si un canal está en favoritos
function isChannelFavorite(channelId) {
  return favorites.some((id) => id === channelId)
}

// Actualizar el botón de favoritos
function updateFavoriteButton() {
  if (isChannelFavorite(currentChannel.id)) {
    favoriteButton.innerHTML = '<i class="fas fa-heart"></i>'
    favoriteButton.classList.add("favorite-active")
  } else {
    favoriteButton.innerHTML = '<i class="far fa-heart"></i>'
    favoriteButton.classList.remove("favorite-active")
  }
}

// Alternar favorito
function toggleFavorite() {
  if (isChannelFavorite(currentChannel.id)) {
    favorites = favorites.filter((id) => id !== currentChannel.id)
  } else {
    favorites.push(currentChannel.id)
  }
  saveFavorites()
  updateFavoriteButton()
}

// Cargar un canal
function loadChannel(channel) {
  currentChannel = channel

  // Actualizar información del canal
  document.getElementById("channel-name").textContent = channel.name
  document.getElementById("channel-category").textContent = channel.category || channel.genre
  document.getElementById("channel-logo").src = channel.logo

  // Mostrar spinner de carga
  loadingSpinner.style.display = "flex"

  // Establecer el poster y la URL del stream
  videoElement.poster = channel.logo
  videoElement.src = channel.streamUrl

  // Cargar el video
  videoElement.load()

  // Actualizar botón de favoritos
  updateFavoriteButton()
}

// Formatear tiempo (segundos a MM:SS)
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`
}

// Actualizar la barra de progreso y el tiempo
function updateProgress() {
  if (videoElement.duration) {
    const currentTime = videoElement.currentTime
    const duration = videoElement.duration

    // Actualizar barra de progreso
    progressBar.value = (currentTime / duration) * 100

    // Actualizar display de tiempo
    timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`
  } else {
    // Para streams en vivo, mostrar solo el tiempo actual
    timeDisplay.textContent = formatTime(videoElement.currentTime)
  }
}

// Cambiar la posición de reproducción
function setProgress() {
  if (videoElement.duration) {
    videoElement.currentTime = (progressBar.value / 100) * videoElement.duration
  }
}

// Alternar reproducción/pausa
function togglePlay() {
  if (videoElement.paused) {
    videoElement
      .play()
      .then(() => {
        isPlaying = true
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'
        mobilePlayOverlay.classList.remove("visible")
      })
      .catch((error) => {
        console.error("Error al reproducir:", error)
      })
  } else {
    videoElement.pause()
    isPlaying = false
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>'
    mobilePlayOverlay.classList.add("visible")
  }
}

// Alternar silencio
function toggleMute() {
  videoElement.muted = !videoElement.muted
  isMuted = videoElement.muted

  if (isMuted) {
    muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>'
  } else {
    muteButton.innerHTML = '<i class="fas fa-volume-up"></i>'
  }
}

// Cambiar volumen
function changeVolume() {
  videoElement.volume = volumeSlider.value / 100

  if (videoElement.volume === 0) {
    muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>'
    isMuted = false
    videoElement.muted = false
  } else {
    muteButton.innerHTML = '<i class="fas fa-volume-up"></i>'
    isMuted = false
    videoElement.muted = false
  }
}

// Alternar pantalla completa
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    const videoPlayer = document.getElementById("video-player")
    if (videoPlayer.requestFullscreen) {
      videoPlayer.requestFullscreen()
    } else if (videoPlayer.webkitRequestFullscreen) {
      /* Safari */
      videoPlayer.webkitRequestFullscreen()
    } else if (videoPlayer.msRequestFullscreen) {
      /* IE11 */
      videoPlayer.msRequestFullscreen()
    }
    fullscreenButton.innerHTML = '<i class="fas fa-compress"></i>'
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen()
    }
    fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>'
  }
}

// Mostrar modal de información
function showInfoModal() {
  // Actualizar información en el modal
  document.getElementById("modal-channel-name").textContent = currentChannel.name
  document.getElementById("modal-channel-logo").src = currentChannel.logo
  document.getElementById("modal-channel-category").textContent = currentChannel.category || currentChannel.genre
  document.getElementById("modal-channel-country").textContent = currentChannel.country || "No disponible"
  document.getElementById("modal-channel-language").textContent = currentChannel.language || "No disponible"
  document.getElementById("modal-channel-viewers").textContent = currentChannel.viewCount
    ? currentChannel.viewCount.toLocaleString()
    : "0"

  // Mostrar el modal
  infoModal.style.display = "flex"
}

// Cerrar modal de información
function closeInfoModal() {
  infoModal.style.display = "none"
}

// Renderizar la lista de canales
function renderChannels() {
  channelsGrid.innerHTML = ""

  availableChannels.forEach((channel) => {
    const channelCard = document.createElement("div")
    channelCard.className = "channel-card"
    channelCard.onclick = () => loadChannel(channel)

    channelCard.innerHTML = `
            <div class="channel-thumbnail">
                <img src="${channel.logo}" alt="${channel.name}">
                ${channel.isLive ? '<div class="live-badge">EN VIVO</div>' : ""}
            </div>
            <div class="channel-details">
                <h3>${channel.name}</h3>
                <p>${channel.category || channel.genre}</p>
                <p>${channel.viewCount ? channel.viewCount.toLocaleString() : "0"} espectadores</p>
            </div>
        `

    channelsGrid.appendChild(channelCard)
  })
}

// Event Listeners
videoElement.addEventListener("loadeddata", () => {
  loadingSpinner.style.display = "none"
})

videoElement.addEventListener("waiting", () => {
  loadingSpinner.style.display = "flex"
})

videoElement.addEventListener("playing", () => {
  loadingSpinner.style.display = "none"
  isPlaying = true
  playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'
  mobilePlayOverlay.classList.remove("visible")
})

videoElement.addEventListener("pause", () => {
  isPlaying = false
  playPauseButton.innerHTML = '<i class="fas fa-play"></i>'
  mobilePlayOverlay.classList.add("visible")
})

videoElement.addEventListener("timeupdate", updateProgress)

videoElement.addEventListener("error", () => {
  loadingSpinner.style.display = "none"
  alert("Error al cargar el video. Por favor, intente con otro canal.")
})

playPauseButton.addEventListener("click", togglePlay)
muteButton.addEventListener("click", toggleMute)
volumeSlider.addEventListener("input", changeVolume)
progressBar.addEventListener("input", setProgress)
fullscreenButton.addEventListener("click", toggleFullscreen)
favoriteButton.addEventListener("click", toggleFavorite)
infoButton.addEventListener("click", showInfoModal)
closeModalButton.addEventListener("click", closeInfoModal)
modalCloseButton.addEventListener("click", closeInfoModal)
mobilePlayOverlay.addEventListener("click", togglePlay)

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  loadFavorites()
  renderChannels()
  loadChannel(availableChannels[0])

  // Detectar si es móvil
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if (isMobile) {
    mobilePlayOverlay.classList.add("visible")
  }
})

// Evento para cambios de pantalla completa
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    fullscreenButton.innerHTML = '<i class="fas fa-compress"></i>'
  } else {
    fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>'
  }
})

