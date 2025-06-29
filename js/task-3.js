const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', function (event) {
  const name = event.currentTarget.value.trim();
  if (name === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = name;
  }
});
