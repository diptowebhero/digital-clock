const time = document.getElementById("time");

setInterval(function () {
  let date = new Date();
  let hour = date.getHours();
  let dayNight = "Am";
  if (hour > 12) {
    dayNight = "PM";
    hour -= 12;
  }
  let minute = date.getMinutes();
  if(minute < 10) {
      minute = "0" + minute;
  }
  
  let second = date.getSeconds();
  if(second < 10) {
    second = "0" + second;
}
  time.textContent = hour + ":" + minute + ":" + second + " " + dayNight;
});
