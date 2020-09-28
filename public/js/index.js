function setModalSource(event) {
  var triggerElement = event.currentTarget;

  if (triggerElement.dataset.source) {
    $("#iframeVideo")[0].src =
      "https://player.vimeo.com/video/" +
      triggerElement.dataset.source +
      "?autoplay=1&loop=1&title=0&byline=0&portrait=0";
  }
}

$(".launchModal").click(setModalSource);
