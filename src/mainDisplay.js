import { editProject } from './editProject.js'
import { removeSublist } from './removeSublist.js'
import { find } from './find.js'
import { addSubList } from './addSubList.js'
import { displayController } from './displayController.js'
import { clearDisplay } from './clearDisplay.js'

const mainDisplay = (projectId) => {

  clearDisplay();

  function editProjectController () {
    editProject(currentProject);
  }

  function deleteSublist (event) {
    removeSublist(event, currentProject);
  }

  const displayArea = document.querySelector('.display');
  const currentProject = find.findProjectInArray(projectId);


  // edit button

  // clear existing edit button
  const removeEditButton = document.querySelector('.edit-project');
  if (removeEditButton) {
    displayArea.removeChild(displayArea.firstChild);
  }

  const editButton = document.createElement('button');
  editButton.classList.add('edit-project');
  editButton.innerHTML = 'Edit Project';
  displayArea.insertBefore(editButton, displayArea.childNodes[0]);

  editButton.addEventListener('click', editProjectController);

  
  // Header
  const header = document.querySelector('.projectTitle');
  header.innerHTML = currentProject.projectTitle;


  // priority
  const priority = document.querySelector('.priority');
  if (currentProject.priority === true) {
    priority.innerHTML = '🌈 HIGH PRIORITY! 🌈';
  } else {
    priority.innerHTML = '';
  }

  // toggle priority

  const togglePriority = document.createElement('button');
  togglePriority.setAttribute('data-Id', projectId);
  togglePriority.classList.add('toggle-priority-button');
  togglePriority.innerHTML = currentProject.priority === true? '✔' : '!'
  priority.appendChild(togglePriority);
  
  // toggle priority action
  const togglePriorityButton = document.querySelector('.toggle-priority-button');
  togglePriorityButton.addEventListener('click', () => {
    const projectIndex = find.findProjectIndex(find.findProjectInArray(projectId));
    displayController.allProjects[projectIndex].priority = 
    !displayController.allProjects[projectIndex].priority;
    
    const sideBarPriority = document.querySelector(`p[data-id="${projectId}"]`);

    if (displayController.allProjects[projectIndex].priority === true) {
        sideBarPriority.innerHTML = '🌈';
      } else {
        sideBarPriority.innerHTML = '';
      }

    mainDisplay(projectId);
  });
  

  // About Section
  const aboutTitle = document.querySelector('.about-title');
  aboutTitle.innerHTML = 'About: ';

  const about = document.querySelector('.about');
  about.innerHTML = currentProject.aboutProject;


  // Sublists
  const checkList = document.querySelector('.check-list-title');
  checkList.innerHTML = 'Check List: ';

  const sublists = document.querySelector('.sublists');
  
  // clear out existing sublists from DOM
  while (sublists.firstChild) {
    sublists.removeChild(sublists.firstChild);
  }

  // append sublist elements
  for (let sublist of currentProject.sublists) {

    // Li Element
    const sublistElement = document.createElement('li');
    sublistElement.setAttribute('data-subId', sublist.sublistId);
    sublistElement.classList.add('sublist');
    sublists.appendChild(sublistElement);

    // checkbox for complete
    const checkboxElement = document.createElement('input');
    checkboxElement.setAttribute('type', 'checkbox');
    checkboxElement.setAttribute('data-subId', sublist.sublistId);
    checkboxElement.classList.add('not-finished');
    checkboxElement.classList.add('sublistItem');
    
    if (checkboxElement.sublistComplete == true) {
      checkboxElement.setAttribute('checked', '');
    }
    
    sublistElement.appendChild(checkboxElement);
    
    // sublist header
    const subHeader = document.createElement('h4');
    subHeader.setAttribute('data-subId', sublist.sublistId);
    subHeader.classList.add('sublistHeader');
    subHeader.classList.add('sublistItem');
    subHeader.innerHTML = sublist.sublistTitle;
    sublistElement.appendChild(subHeader);

    const deleteIcon = document.createElement('p');
    deleteIcon.setAttribute('data-subId', sublist.sublistId);
    deleteIcon.classList.add('sublist-delete');
    deleteIcon.classList.add('sublistItem');
    deleteIcon.innerHTML = '🗑';
    sublistElement.appendChild(deleteIcon);
  }

  // delete button action
  const deleteIcon = document.querySelectorAll('.sublist-delete');
  deleteIcon.forEach(button => button.addEventListener('click', deleteSublist))

  // add more subists button
  const createAddSublistButton = document.createElement('button');
  createAddSublistButton.setAttribute('data-Id', projectId);
  createAddSublistButton.classList.add('add-sublist-button');
  createAddSublistButton.classList.add('sublistItem');
  createAddSublistButton.innerHTML = '+';
  sublists.appendChild(createAddSublistButton);
  
  // add sublist action
  const addSublistButton = document.querySelector('.add-sublist-button');
  addSublistButton.addEventListener('click', () => {
    createAddSublistButton.remove();
    addSubList(currentProject);
  })

}

export { mainDisplay }
