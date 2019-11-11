const mainDisplay = (allOpenProjects, projectId) => {

  function findProjectInArray (clickedId) {
    for (const project of allOpenProjects) {
      if (clickedId == project.projectId) {
        return project;
      }
    }
  }

  const displayArea = document.querySelector('.display');
  const currentProject = findProjectInArray(projectId);

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

  
  // Header
  const header = document.querySelector('.projectTitle');
  header.innerHTML = currentProject.projectTitle;


  // Due Date
  const dueDateTitle = document.querySelector('.dueDate-title');
  dueDateTitle.innerHTML = 'Due: ';

  const dueDate = document.querySelector('.dueDate');
  dueDate.innerHTML = currentProject.dueDate;


  // priority
  const priority = document.querySelector('.priority');
  if (currentProject.priority == true) {
  priority.innerHTML = '!';  
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
    
    if (checkboxElement.sublistComplete == true) {
      checkboxElement.setAttribute('checked', '');
    }
    
    sublistElement.appendChild(checkboxElement);
    
    // sublist header
    const subHeader = document.createElement('h4');
    subHeader.setAttribute('data-subId', sublist.sublistId);
    subHeader.classList.add('sublistHeader');
    subHeader.innerHTML = sublist.sublistTitle;
    sublistElement.appendChild(subHeader);

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('data-subId', sublist.sublistId);
    deleteButton.classList.add('sublist-delete');
    deleteButton.innerHTML = 'Remove';
    sublistElement.appendChild(deleteButton);
  }
}

export { mainDisplay }
