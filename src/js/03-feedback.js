import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('input', throttle(savedStorage, 500));

function savedStorage() {
  const { email, message } = feedbackForm.elements;
  const objJson = JSON.stringify({
    email: email.value,
    message: message.value,
  });
  localStorage.setItem('feedback-form-state', objJson);
  console.log(`email: ${email.value},message: ${message.value}`);
}

const savedForm = localStorage.getItem('feedback-form-state');
if (savedForm) {
  const newObjInfo = JSON.parse(savedForm);
  const { email, message } = feedbackForm.elements;
  email.value = newObjInfo.email;
  message.value = newObjInfo.message;
}

feedbackForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  const { email, message } = feedbackForm.elements;
  if (email.value === '' || message.value === '') {
    alert('все поля нужно заполнить');
    return;
  }
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
}
