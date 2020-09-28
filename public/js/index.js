$(document).ready(function () {
  function setModalSource(event) {
    var triggerElement = event.currentTarget;
    var iframe = $("#iframeVideo")[0];
    var player = new Vimeo.Player(iframe);

    if (triggerElement.dataset.source) {
      player.loadVideo(triggerElement.dataset.source);
    }
  }

  $(".launchModal").click(setModalSource);
});
