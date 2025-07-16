var countDownDate = new Date("Jul 16, 2025 13:30:05").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    

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