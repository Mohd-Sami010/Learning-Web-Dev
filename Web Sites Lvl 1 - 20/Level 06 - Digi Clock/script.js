function UpdateClock() {
    const now = new Date();

    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');

    const time = `${hour}:${minute}:${second}`;

    document.getElementById('time').textContent = time;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
}
setInterval(UpdateClock, 1);
UpdateClock();

let timeLeft = 60;
let timer = null;

function startTimer() {
  if (timer !== null) return;

  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      timer = null;
      document.getElementById('timer').textContent = "00:00";
    } else {
      const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
      const secs = String(timeLeft % 60).padStart(2, '0');
      document.getElementById('timer').textContent = `${mins}:${secs}`;
      timeLeft--;
    }
  }, 1000);
}

