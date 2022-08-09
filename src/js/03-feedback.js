import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector('.feedback-form'),
// };
// const LOCAL_KEY = 'feedback-form-state';

// addLocalData();

// const formData = {
//   email: refs.form.email.value,
//   message: refs.form.message.value,
// };

// refs.form.addEventListener('input', throttle(onFormInput, 500));
// refs.form.addEventListener('submit', onFormSubmit);

// function onFormInput(e) {
//   (formData[e.target.name] = e.target.value),
//     localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
// }

// function onFormSubmit(e) {
//   e.preventDefault();

//   const dataSubmit = {
//     email: e.currentTarget.email.value,
//     massage: e.currentTarget.message.value,
//   };
//   console.log(dataSubmit);

//   localStorage.removeItem(LOCAL_KEY);
//   refs.form.reset();
// }

// function addLocalData() {
//      const localData = JSON.parse(localStorage.getItem(LOCAL_KEY))

//     if (!localData) return;

//     if (localData.email)
//         refs.form.email.value = localData.email;
//     if (localData.message)
//         refs.form.message.value = localData.message;

// }
//
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let objectStorage = {
  email: '',
  message: '',
};

getInputFromLS();

function getInputFromLS() {
  try {
    const dataLS = localStorage.getItem(STORAGE_KEY);
    if (!dataLS) return;
    objectStorage = JSON.parse(dataLS);
    for (let key in objectStorage) {
      form.elements[key].value = objectStorage[key];
    }
  } catch (error) {
    console.log('Get state error: ', error.message);
  }
}

function onFormInput(e) {
  objectStorage[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objectStorage));
}

function onFormSubmit(e) {
  e.preventDefault();

  const { email, message } = e.currentTarget.elements;

  const formData = {
    email: email.value,
    message: message.value,
  };

  console.log('This is Form Data:', formData);

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
