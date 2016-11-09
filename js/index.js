setInterval(function() {
  var secondsSize = $('.seconds').width();
  var minutesSize = $('.minutes').width();
  var hoursSize = $('.hours').width();
  var seconds = new Date().getSeconds();
  var sdegree = seconds * 6 + 270;
  var stranslate = Math.round(hoursSize / 2 + secondsSize / 2);
  seconds = ("0" + seconds).slice(-2);
  $(".seconds").css({
    "transform": "rotate(" + sdegree + "deg) translate(" + stranslate + "px) rotate(-" + sdegree + "deg)"
  }).text(seconds);

  var minutes = new Date().getMinutes();
  var mdegree = minutes * 6 + 270;
  var mtranslate = Math.round(hoursSize / 2 + minutesSize / 2);
  minutes = ("0" + minutes).slice(-2);
  $(".minutes").css({
    "transform": "rotate(" + mdegree + "deg) translate(" + mtranslate + "px) rotate(-" + mdegree + "deg)"
  }).text(minutes);

  var hours = new Date().getHours();
  hours = ("0" + hours).slice(-2);
  $(".hours").text(hours);

}, 1000);