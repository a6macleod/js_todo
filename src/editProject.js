import { projectForm } from './projectForm.js'
import { listAllProjectsSideBar } from './listAllProjectsSideBar.js'
import { createProject } from './createProject'
import { find } from './find.js'


const editProject = (currentProject, allOpenProjects) => {

  projectForm();

  function clearForm () {
    while (form.firstChild) {
      form.removeChild(form.firstChild);
    }
    listAllProjectsSideBar(allOpenProjects);
  }

  function submitForm () {
    const isPriority = () => {
      checkbox.checked ? true : false
    }
    const temp = [formHeader.value, isPriority, formAbout.value];
    const newObject = createProject(temp, allOpenProjects);
    
    const indexSpot = find.findProjectIndex(currentProject, allOpenProjects);
    allOpenProjects[indexSpot] = newObject;
    clearForm();
  }

  const form = document.querySelector('#new-project-form');
  const formHeader = document.querySelector('#form-header');
  const checkbox = document.querySelector('#priority');
  const formAbout = document.querySelector('#form-about');
  const submitButton = document.querySelector('#submit-button');
  const resetButton = document.querySelector('#reset-button');
  const cancelButton = document.querySelector('#cancel-button');

  formHeader.value = currentProject.projectTitle;
  checkbox.checked = currentProject.priority;
  formAbout.value = currentProject.aboutProject;


  resetButton.addEventListener('click', () => form.reset());
  cancelButton.addEventListener('click', clearForm);
  submitButton.addEventListener('click', submitForm);

}

export { editProject }