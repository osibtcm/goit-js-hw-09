import '../css/2-form.css';

const form = document.querySelector('form');
const storageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(storageKey);

let parsedData;

try {
  parsedData = JSON.parse(savedData);
} catch (error) {
  parsedData = null;
}

if (parsedData) {
  formData = parsedData;
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

form.addEventListener('input', event => {
  const key = event.target.name;
  const value = event.target.value.trim();

  formData[key] = value;

  localStorage.setItem(storageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(storageKey);
  formData = { email: '', message: '' };
  form.reset();
});
