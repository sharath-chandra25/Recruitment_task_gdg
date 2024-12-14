document.addEventListener('DOMContentLoaded', () => {
  const timerElement = document.getElementById('timer');
  const previewButton = document.getElementById('preview');

  function updateCountdown() {
      const newYear = new Date('January 1, 2025 00:00:00').getTime();
      const now = new Date().getTime();
      const difference = newYear - now;

      if (difference <= 0) {
          timerElement.textContent = 'Happy New Year!';
          return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      timerElement.textContent = `${days}:${hours}:${minutes}:${seconds}`;
  }

  setInterval(updateCountdown, 1000);

  previewButton.addEventListener('click', () => {
      timerElement.textContent = 'Happy New Year!';
  });
});
