const targetdate = new Date("Aug 16, 2030 18:30:00").getTime();

var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  var distance = targetdate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var hourElement = document.getElementById("hour");
  var minuteElement = document.getElementById("minute");
  var secondElement = document.getElementById("second");
  if (hourElement) {
    if (typeof hours !== "undefined" && !isNaN(hours)) {
      hourElement.innerHTML = (hours < 10 ? "0" : "") + hours;
    } else {
      console.error("Variable 'hours' is not defined or is not a number");
    }
  } else {
    console.error("Element with ID 'hour' not found");
  }

  if (minuteElement) {
    if (typeof minutes !== "undefined" && !isNaN(minutes)) {
      minuteElement.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    } else {
      console.error("Variable 'minutes' is not defined or is not a number");
    }
  } else {
    console.error("Element with ID 'minute' not found");
  }

  if (secondElement) {
    if (typeof seconds !== "undefined" && !isNaN(seconds)) {
      secondElement.innerHTML = (seconds < 10 ? "0" : "") + seconds;
    } else {
      console.error("Variable 'seconds' is not defined or is not a number");
    }
  } else {
    console.error("Element with ID 'second' not found");
  }

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
