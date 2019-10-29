//import { createProject } from './createProject.js'
import { createForm } from './createForm.js'


const editButton = document.querySelector('.edit-project');
/*
const allOpenProjects = [
  {
    projectId: = 0,
    projectTitle: = 'default project',
    dueDate: = "10/31/2019",
    priority: = false,
    aboutProject: = 'about this project',
    projectIsComplete: = false),
    sublist: = 
    [
      {
        sublistId: = 0,
        sublistTitle: = 'sublist title one',
        sublistComplete: = false
      },
      {
        sublistId: = 1,
        sublistTitle: = 'sublist title two',
        sublistComplete: = false
      },
      {
        sublistId: = 3,
        sublistTitle: = 'sublist title three',
        sublistComplete: = false
      }
    ]
  }
]*/

// Event listeners
editButton.addEventListener('click', createForm);

