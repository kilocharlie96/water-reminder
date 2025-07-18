function startCounter() {

  var option = document.getElementById("time-select").value;
  var now = new Date();
  var alarmTime = new Date(now.getTime() + (option * 60 * 1000));
  console.log(alarmTime);

var x = setInterval(function() {

    var nowTime = new Date().getTime()
        distance = alarmTime - nowTime;
    

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  document.getElementById("counter").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
    

  if (distance < 0) {
    clearInterval(x);
    alert("Napi sa vody!");
    htmx.ajax('GET', 'notification.html', {
    target: '#main'
  });
  }
}, 1000);

}