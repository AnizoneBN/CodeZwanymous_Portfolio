  document.addEventListener("DOMContentLoaded", function() {
      const video = document.getElementById('background-video');
      const urlParams = new URLSearchParams(window.location.search);
      const sound = urlParams.get('sound');

      if (sound === 'on') {
        video.muted = false;
      } else {
        video.muted = true;
      }
    });