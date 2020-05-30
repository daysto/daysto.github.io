function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return days;
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var days = clock.querySelector('.days');

  function updateClock() {
    var days_ = getTimeRemaining(endtime);

    days.innerHTML = days_;

    if (days <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline="January 4 2021 00:00:00 GMT+0300"
initializeClock('timer', deadline);