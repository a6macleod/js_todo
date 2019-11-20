import { clearDisplay } from './clearDisplay.js'
import { displayController } from './displayController.js'

const projectForm = () => {

  const allProjects = displayController.allProjects;

  // clear existing display
  clearDisplay();

  const form = document.querySelector('#new-project-form');

  // Project Title (required)
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('formDiv');
  form.appendChild(headerDiv);

  const formHeaderLabel = document.createElement('label');
  formHeaderLabel.setAttribute('for', 'form-header');
  formHeaderLabel.classList.add('form-label')
  formHeaderLabel.innerHTML = 'Title:';
  headerDiv.appendChild(formHeaderLabel);

  const formHeader = document.createElement('textarea')
  formHeader.setAttribute('cols', '25');
  formHeader.setAttribute('rows', '1');
  formHeader.id = 'form-header';
  formHeader.classList.add('form-input');
  formHeader.setAttribute('value', '');
  formHeader.required = true;
  headerDiv.appendChild(formHeader);

  // complete check box
  const checkDiv = document.createElement('div');
  checkDiv.classList.add('formDiv');
  form.appendChild(checkDiv);

  const formPriorityLabel = document.createElement('label');
  formPriorityLabel.setAttribute('for', 'priority');
  formPriorityLabel.classList.add('form-label');
  formPriorityLabel.innerHTML = 'Priority?';
  checkDiv.appendChild(formPriorityLabel);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('form-input');
  checkbox.id = 'priority';
  checkDiv.appendChild(checkbox);


  // About Project
  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('formDiv');
  form.appendChild(aboutDiv);

  const formAboutLabel = document.createElement('label');
  formAboutLabel.setAttribute('for', 'form-about');
  formAboutLabel.classList.add('form-label');
  formAboutLabel.innerHTML = 'About:';
  aboutDiv.appendChild(formAboutLabel);

  const formAbout = document.createElement('textarea');
  formAbout.setAttribute('cols', '25');
  formAbout.setAttribute('rows', '2');
  formAbout.setAttribute('value', 'about project');
  formAbout.id = 'form-about';
  formAbout.classList.add('form-input');
  aboutDiv.appendChild(formAbout);

  // Buttons
  // Submit Button
  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('formDiv');
  form.appendChild(buttonDiv);

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.id = 'submit-button';
  submitButton.classList.add('form-button');
  submitButton.innerHTML = 'Save';
  buttonDiv.appendChild(submitButton);


  // Reset button
  const resetButton = document.createElement('button');
  resetButton.setAttribute('type', 'reset');
  resetButton.id = 'reset-button';
  resetButton.classList.add('form-button');
  resetButton.innerHTML = 'Reset';
  buttonDiv.appendChild(resetButton);

  // Cancel buttton
  const cancelButton =document.createElement('button');
  cancelButton.setAttribute('type', 'reset');
  cancelButton.id = 'cancel-button';
  cancelButton.classList.add('form-button');
  cancelButton.innerHTML = 'Cancel';
  buttonDiv.appendChild(cancelButton);

}

export { projectForm }
