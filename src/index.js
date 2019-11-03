import { createProject } from './createProject.js'
import { createNewProject } from './createNewProject.js'
import { listAllProjects } from './listAllProjects.js'


const editButton = document.querySelector('.edit-project');
const sideBarProjects = document.querySelector('#project-list');
let currentProject = {};


const allOpenProjects = [{
    'projectId': 0,
    'projectTitle': 'default project',
    'dueDate': "10/31/2019",
    'priority': false,
    'aboutProject': 'about this project',
    'projectIsComplete': false,
    'sublist': [ 
      {
        'sublistId': 0,
        'sublistTitle': 'sublist title one',
        'sublistComplete': false
      },
      {
        'sublistId': 1,
        'sublistTitle': 'sublist title two',
        'sublistComplete': false
      },
      {
        'sublistId': 3,
        'sublistTitle': 'sublist title three',
        'sublistComplete': false
      }
    ]
  }
] 


function setCurrentProject (event) {
  updateHighlighting(event);

  // find the object in allOpenProjects

  // pipe the data over to the dispaly project

  // allow edit button to be able to access the project and auto fill the inforamtion

  function updateHighlighting (event) {}
    // remove old selectedProject
    const allSideBarProjects = document.querySelectorAll('.side-project-container');
    allSideBarProjects.forEach(function(project) {
      project.classList.remove('currentProject')
      });
    
    // set new selectedProject
    const clickedId = event.target.getAttribute('data-id');
    const clickedContainer = document.querySelector(`div[data-id="${clickedId}"]`);
    clickedContainer.classList.add('currentProject');
  
};

// Event listeners
editButton.addEventListener('click', createNewProject);
sideBarProjects.addEventListener('click', setCurrentProject);




const sampleProject = ['Generic Project Title', '11/01/19', true, 'A long string about what this project will be about'];

const sampleProjectNext = () => {
  const temp = createProject(sampleProject);
  allOpenProjects.push(temp);

}
// add new project (replace this with a click from the "SAVE" button)
sampleProjectNext();

// initial loading of the side bar project list
listAllProjects(allOpenProjects);

