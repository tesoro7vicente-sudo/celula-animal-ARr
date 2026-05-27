// Maneja la barra de progreso de <model-viewer>
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;

  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};

const modelViewer = document.querySelector("model-viewer");

// Barra de progreso
modelViewer.addEventListener('progress', onProgress);

// Hotspots interactivos
modelViewer.addEventListener("load", () => {
  const hotspots = modelViewer.querySelectorAll(".Hotspot");

  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("click", (event) => {
      event.stopPropagation();
      // Desactiva todos los demás
      hotspots.forEach(h => h.classList.remove("active"));
      // Activa solo el clicado
      hotspot.classList.add("active");
    });
  });

  // Clic fuera de hotspot → cerrar todos
  modelViewer.addEventListener("click", () => {
    hotspots.forEach(h => h.classList.remove("active"));
  });
});
