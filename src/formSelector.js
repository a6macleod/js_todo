const formSelector = () => {

  const submitButton = document.querySelector('#submit-button');
  const resetButton = document.querySelector('#reset-button');
  const cancelButton = document.querySelector('#cancel-button');
  const form = document.querySelector('#new-project-form');
  const formHeader = document.querySelector('#form-header');
  const checkbox = document.querySelector('#priority');
  const formAbout = document.querySelector('#form-about');

return { 
  submitButton,
  resetButton,
  cancelButton,
  form,
  formHeader,
  checkbox,
  formAbout
 }
}

export { formSelector }