import { clearDisplay } from './clearDisplay.js'
import { displayController } from './displayController.js'

const projectForm = () => {

  const allProjects = displayController.allProjects;

  // clear existing display
  clearDisplay();

  const form = document.querySelector('#new-project-form');

  // Project Title (required)
  const formHeaderLabel = document.createElement('label');
  formHeaderLabel.setAttribute('for', 'form-header');
  formHeaderLabel.classList.add('form-label')
  formHeaderLabel.innerHTML = 'Project Title';
  form.appendChild(formHeaderLabel);

  const formHeader = document.createElement('input')
  formHeader.setAttribute('type','text');
  formHeader.id = 'form-header';
  formHeader.classList.add('form-input');
  formHeader.setAttribute('value', '');
  formHeader.required = true;
  form.appendChild(formHeader);

  // complete check box
  const formPriorityLabel = document.createElement('label');
  formPriorityLabel.setAttribute('for', 'priority');
  formPriorityLabel.classList.add('form-label');
  formPriorityLabel.innerHTML = 'Priority';
  form.appendChild(formPriorityLabel);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('form-input');
  checkbox.id = 'priority';
  form.appendChild(checkbox);


  // About Project
  const formAboutLabel = document.createElement('label');
  formAboutLabel.setAttribute('for', 'form-about');
  formAboutLabel.classList.add('form-label');
  formAboutLabel.innerHTML = 'About This Project';
  form.appendChild(formAboutLabel);

  const formAbout = document.createElement('textarea');
  formAbout.setAttribute('cols', '30');
  formAbout.setAttribute('rows', '10');
  formAbout.setAttribute('value', 'about project');
  formAbout.id = 'form-about';
  formAbout.classList.add('form-input');
  form.appendChild(formAbout);

  // Buttons
  // Submit Button
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.id = 'submit-button';
  submitButton.classList.add('form-button');
  submitButton.innerHTML = 'Submit Project';
  form.appendChild(submitButton);


  // Reset button
  const resetButton = document.createElement('button');
  resetButton.setAttribute('type', 'reset');
  resetButton.id = 'reset-button';
  resetButton.classList.add('form-button');
  resetButton.innerHTML = 'Reset Form';
  form.appendChild(resetButton);

  // Cancel buttton
  const cancelButton =document.createElement('button');
  cancelButton.setAttribute('type', 'reset');
  cancelButton.id = 'cancel-button';
  cancelButton.classList.add('form-button');
  cancelButton.innerHTML = 'Cancel';
  form.appendChild(cancelButton);

}

export { projectForm }
