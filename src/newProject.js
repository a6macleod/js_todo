import { projectForm } from './projectForm.js'
import { listAllProjectsSideBar } from './listAllProjectsSideBar.js'
import { createProject } from './createProject'
import { clearDisplay } from './clearDisplay.js'
import { updateLocalStorage } from './updateLocalStorage.js'
import { displayController } from './displayController.js'

const newProject = () => {
  const allProjects = displayController.allProjects;

  // Open forms
  projectForm(allProjects);

  const submitButton = document.querySelector('#submit-button');
  const resetButton = document.querySelector('#reset-button');
  const cancelButton = document.querySelector('#cancel-button');
  const form = document.querySelector('#new-project-form');
  const formHeader = document.querySelector('#form-header');
  const checkbox = document.querySelector('#priority');
  const formAbout = document.querySelector('#form-about');


  function clearForm () {
    // code to clear the form
    while (form.firstChild) {
      form.removeChild(form.firstChild);
    }
    updateLocalStorage();
    listAllProjectsSideBar();
  }

  function isChecked () {
    if (checkbox.checked == true) {
      return true
    } else {
      return false
    }
  }    

  function submitForm () {
    const isPriority = isChecked();
    const temp = [formHeader.value, isPriority, formAbout.value];
    const newObject = createProject(temp, allProjects);
    displayController.allProjects.push(newObject);
    console.log(checkbox);
    clearForm();
  }

  // event listeners
  resetButton.addEventListener('click', () => form.reset());
  cancelButton.addEventListener('click', clearForm);
  submitButton.addEventListener('click', submitForm);
}

export { newProject }
