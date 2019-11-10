import { createProject } from './createProject.js'
import { newProject } from './newProject.js'
import { listAllProjectsSideBar } from './listAllProjectsSideBar.js'
//import { mainDisplay } from './mainDisplay.js'
//import { addSubList } from './addSubList.js'


//const editButton = document.querySelector('.edit-project');
const newProjectButton = document.querySelector('#new-project-button');
const sideBarProjects = document.querySelector('#project-list');
//const addSubListButton = document.querySelector('.add-sublist-button');
const allOpenProjects =  /*JSON.parse(localStorage.getToDo('toDo')) || */ [{
    'projectId': 0,
    'projectTitle': 'default project',
    'dueDate': "10/31/2019",
    'priority': false,
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
  }
];
const currentProject = allOpenProjects[0];


// Event listeners
newProjectButton.addEventListener('click', () => {
  newProject(allOpenProjects)
});

//editButton.addEventListener('click', newProject);

/*addSubListButton.addEventListener('click', () => {
  if (currentProject == {}){
    currentProject = allOpenProjects[0];
  } else {
    addSubList(currentProject);
  }
});*/




const sampleProject = ['New Project', '11/01/19', true, 'A long string about what this project will be about'];

const sampleProjectNext = () => {
  const temp = createProject(sampleProject);
  allOpenProjects.push(temp);
}
// add new project (replace this with a click from the "SAVE" button)
sampleProjectNext();

// initial loading of the side bar project list
listAllProjectsSideBar(allOpenProjects);
