import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', () => {
  const incrementBtn = document.getElementById('incrementBtn');
  const counterValue = document.getElementById('counterValue');
  const nameInput = document.getElementById('nameInput');
  const greetBtn = document.getElementById('greetBtn');
  const greetingMessage = document.getElementById('greetingMessage');

  incrementBtn.addEventListener('click', async () => {
    try {
      const result = await backend.increment();
      counterValue.textContent = `Counter: ${result}`;
    } catch (error) {
      console.error('Error incrementing counter:', error);
    }
  });

  greetBtn.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    if (name) {
      try {
        const greeting = await backend.greet(name);
        greetingMessage.textContent = greeting;
      } catch (error) {
        console.error('Error greeting:', error);
      }
    } else {
      greetingMessage.textContent = 'Please enter a name.';
    }
  });
});
