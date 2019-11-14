import { newProject } from './newProject.js'
import { listAllProjectsSideBar } from './listAllProjectsSideBar.js'

const newProjectButton = document.querySelector('#new-project-button');
const allOpenProjects =  /*JSON.parse(localStorage.getItem('toDo')) || */ [{
    'projectId': 1,
    'projectTitle': 'default project',
    'priority': true,
    'aboutProject': 'about this project',
    'projectIsComplete': false,
    'sublists': 
      [ 
        {
          'sublistId': 0,
          'sublistTitle': 'Project 1 sublist 1',
          'sublistComplete': true
        },
        {
          'sublistId': 1,
          'sublistTitle': 'Project 1 sublist 2',
          'sublistComplete': false
        },
        {
          'sublistId': 3,
          'sublistTitle': 'Project 1 sublist 3',
          'sublistComplete': false
        }
      ]
  }, 
  {
    'projectId': 2,
    'projectTitle': 'Project 2',
    'priority': false,
    'aboutProject': 'about this project',
    'projectIsComplete': false,
    'sublists': 
      [
        {
          'sublistId': 0,
          'sublistTitle': 'Project 2 sublist 1',
          'sublistComplete': true
        }
      ]
    },
    {
      'projectId': 3,
      'projectTitle': 'Project 3',
      'priority': false,
      'aboutProject': 'about this project',
      'projectIsComplete': false,
      'sublists': 
        [
          {
            'sublistId': 0,
            'sublistTitle': 'Project 3 sublist 1',
            'sublistComplete': true
          }
        ]
    }
];


// Event listeners
newProjectButton.addEventListener('click', () => {
  newProject(allOpenProjects);
});

// initial loading of the side bar project list
listAllProjectsSideBar(allOpenProjects);
