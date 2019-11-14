import { editProject } from './editProject.js'
import { removeSublist } from './removeSublist.js'
import { find } from './find.js'

const mainDisplay = (allOpenProjects, projectId) => {


  function editProjectController () {
    editProject(currentProject, allOpenProjects);
  }

  function deleteSublist (event) {
    removeSublist(event, currentProject, allOpenProjects);
  }

  const displayArea = document.querySelector('.display');
  const currentProject = find.findProjectInArray(projectId, allOpenProjects);



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
    priority.innerHTML = '!';
  } else {
    priority.innerHTML = '';
  }
  

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

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('data-subId', sublist.sublistId);
    deleteButton.classList.add('sublist-delete');
    deleteButton.classList.add('sublistItem');
    deleteButton.innerHTML = 'Remove';
    sublistElement.appendChild(deleteButton);
  }

  // delete button action
  const deleteButton = document.querySelectorAll('.sublist-delete');
  deleteButton.forEach(button => button.addEventListener('click', deleteSublist))
}

export { mainDisplay }
