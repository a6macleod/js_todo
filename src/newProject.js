import { projectForm } from './projectForm.js'
import { listAllProjectsSideBar } from './listAllProjectsSideBar.js'
import { createProject } from './createProject'
import { clearDisplay } from './clearDisplay.js'

const newProject = (allOpenProjects) => {
  // Open forms
  projectForm(allOpenProjects);

  const submitButton = document.querySelector('#submit-button');
  const resetButton = document.querySelector('#reset-button');
  const cancelButton = document.querySelector('#cancel-button');
  const form = document.querySelector('#new-project-form');
  const formHeader = document.querySelector('#form-header');
  const formDueDate = document.querySelector('#form-due-date');
  const checkbox = document.querySelector('#priority');
  const formAbout = document.querySelector('#form-about');
  // on save forms
    // push form values to allOpenProjectsArray
    // call to update listAllProjectsSideBar

    function clearForm () {
      // code to clear the form
      while (form.firstChild) {
        form.removeChild(form.firstChild);
      }
      listAllProjectsSideBar(allOpenProjects);
    }

    function submitForm () {
      const isPriority = () => {
        checkbox.checked ? true : false
      }
      const temp = [formHeader.value, formDueDate.value, isPriority, formAbout.value];
      const newObject = createProject(temp, allOpenProjects);
      allOpenProjects.push(newObject);
      console.log(allOpenProjects);
      clearForm();
    }

    // event listeners
    resetButton.addEventListener('click', () => form.reset());
    cancelButton.addEventListener('click', clearForm);
    submitButton.addEventListener('click', submitForm);

}

export { newProject }
