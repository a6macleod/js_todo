import { newProject } from './newProject.js'
import { listAllProjectsSideBar } from './listAllProjectsSideBar.js'
import { displayController } from './displayController.js'

const newProjectButton = document.querySelector('#new-project-button');

// Event listeners
newProjectButton.addEventListener('click', () => {
  newProject(displayController.allProjects);
});

// initial loading of the side bar project list
listAllProjectsSideBar(displayController.allProjects);
