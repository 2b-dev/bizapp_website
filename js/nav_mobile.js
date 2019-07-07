$(".first-button").on("click", function() {
  $(".animated-icon1").toggleClass("open");
});

function close_popup_news(){
  $("#popup-news").fadeOut(500);
}