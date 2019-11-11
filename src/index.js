import { createProject } from './createProject.js'
import { newProject } from './newProject.js'
import { listAllProjectsSideBar } from './listAllProjectsSideBar.js'

const newProjectButton = document.querySelector('#new-project-button');
const sideBarProjects = document.querySelector('#project-list');
const allOpenProjects =  /*JSON.parse(localStorage.getItem('toDo')) || */ [{
    'projectId': 1,
    'projectTitle': 'default project',
    'dueDate': "10/31/2019",
    'priority': true,
    'aboutProject': 'about this project',
    'projectIsComplete': false,
    'sublists': [ 
      {
        'sublistId': 0,
        'sublistTitle': 'sublist title one',
        'sublistComplete': true
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
  }, 
  {
      'projectId': 2,
      'projectTitle': 'Project 2',
      'dueDate': "11/31/2019",
      'priority': false,
      'aboutProject': 'about this project',
      'projectIsComplete': false,
      'sublists': []
    },
    {
        'projectId': 3,
        'projectTitle': 'Project 3',
        'dueDate': "10/31/2019",
        'priority': false,
        'aboutProject': 'about this project',
        'projectIsComplete': false,
        'sublists': []
      }
];
const currentProject = allOpenProjects[0];


// Event listeners
newProjectButton.addEventListener('click', () => {
  newProject(allOpenProjects);
});

/* a sample project and how it was pushed
const sampleProject = ['Sample', '11/01/19', true, 'A long string about what this project will be about'];

const sampleProjectNext = () => {
  const temp = createProject(sampleProject, allOpenProjects );
  allOpenProjects.push(temp);
}
sampleProjectNext();
*/

// initial loading of the side bar project list
listAllProjectsSideBar(allOpenProjects);
