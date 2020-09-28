$(document).ready(function () {
  function setModalSource(event) {
    var triggerElement = event.currentTarget;
    var iframe = $("#iframeVideo")[0];
    var player = new Vimeo.Player(iframe);

    if (triggerElement.dataset.source) {
      player.loadVideo(
        "https://player.vimeo.com/video/" +
          triggerElement.dataset.source +
          "?autoplay=1&loop=1&title=0&byline=0&portrait=0"
      );
    }
  }

  $(".launchModal").click(setModalSource);
});
