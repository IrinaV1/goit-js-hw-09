const formData = {
   email: "",
   message: ""
}

const KEY_FORM = "feedback-form-state";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', handleSubmit);

initForm();


function handleSubmit(event) {
  event.preventDefault();
 const email = formData.email.trim();
  const message = formData.message.trim();

  if (!email || !message) {
    alert("Fill please all fields");
 return;
}
console.log({email, message});

  localStorage.removeItem(KEY_FORM);

    formData.email = "";
  formData.message = "";

  form.reset();
}

function onFormInput(event) {

  const {name, value} = event.target;
  formData[name] = value;
    
  localStorage.setItem(KEY_FORM, JSON.stringify(formData));
 }

function initForm() {
  const savedForm = localStorage.getItem(KEY_FORM);
  
  if (!savedForm) {
    return;
  }
  
  const parsedData = JSON.parse(savedForm);
 formData.email = parsedData.email ?? "";
  formData.message = parsedData.message ?? "";

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
  }

