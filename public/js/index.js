$(document).ready(function () {
  function setModalSource(event) {
    var triggerElement = event.currentTarget;
    var videoId = +triggerElement.dataset.source;
    var iframe = $("#iframeVideo")[0];
    var player = new Vimeo.Player(iframe);

    if (videoId) {
      player
        .loadVideo(videoId)
        .then(function () {
          console.log("success");
        })
        .catch(function () {
          console.log("failed");
        });
    }
  }

  $(".launchModal").click(setModalSource);
});
