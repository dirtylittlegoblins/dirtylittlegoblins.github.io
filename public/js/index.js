$(document).ready(function () {
  var iframe = $("#iframeVideo")[0];
  var player = new Vimeo.Player(iframe);

  // Stop it playing if the browser is refreshed
  stopPlayer();

  function setModalSource(event) {
    var triggerElement = event.currentTarget;
    var videoId = triggerElement.dataset.source;

    // Set the new video id if required.
    if (videoId) {
      player.loadVideo(videoId);
      player.setAutopause(true);
    }
  }

  function stopPlayer() {
    // When hiding the modal stop it and reset
    player.pause();
    player.unload();
  }

  $(".launchModal").click(setModalSource);

  $("#videoModal").on("hidden.bs.modal", stopPlayer);
});
