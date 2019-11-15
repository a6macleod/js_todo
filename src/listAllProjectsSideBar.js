import { mainDisplay } from './mainDisplay.js'
import { clearSideBar } from './clearSideBar.js'
import { find } from './find.js'
import { updateLocalStorage } from './updateLocalStorage.js'

const listAllProjectsSideBar = (allOpenProjects) => {

  clearSideBar();

  function updateHighlighting (projectId) {
    // remove old highlighting
    const allSideBarProjects = document.querySelectorAll('.side-project-container');
    allSideBarProjects.forEach(function(project) {
      project.classList.remove('currentProject')
      });
    
    
    // set new selectedProject
    const clickedContainer = document.querySelector(`div[data-id="${projectId}"]`);
    clickedContainer.classList.add('currentProject');
  }

  function updateDisplay (projectId) {
    mainDisplay(allOpenProjects, projectId);
  };

  function clickSideBar (event) {
    // seperate the remove button
    if (event.target.innerHTML == 'Remove') {
      return
    }
    let projectId = find.getId(event);
    updateDisplay(projectId);
    updateHighlighting(projectId);
  }

  function removeProject (event) {
    let projectId = find.getId(event);

    for (let i = 0; i < allOpenProjects.length; i++) {
      if (projectId == allOpenProjects[i].projectId) {
        allOpenProjects.splice(i, 1);
      }
    }
    listAllProjectsSideBar(allOpenProjects);
    updateLocalStorage(allOpenProjects);
  }

  function isCompleteCheck (event) {
    const projectId = find.getId(event);
    const targetProject = find.findProjectInArray (projectId, allOpenProjects);

    targetProject.projectIsComplete = !targetProject.projectIsComplete;

    allOpenProjects[find.findProjectIndex(targetProject, allOpenProjects)] = targetProject;
    updateLocalStorage(allOpenProjects);
  }



  // populate the project list

  const sideBarProjects = document.querySelector('#project-list');
  let firstLoad = true;


  // div for each project
  for (let i = 0; i < allOpenProjects.length; i++) {
    const projectId = allOpenProjects[i].projectId;
    // project container
    const container = document.createElement('div');
    container.setAttribute('data-id', `${projectId}`);
    container.classList.add('side-project-container');
    
    if (firstLoad == true) {
      container.classList.add('currentProject');
      updateDisplay(projectId);
      firstLoad = false;
    }
    sideBarProjects.appendChild(container);

    // completeness check box
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('data-id', `${allOpenProjects[i].projectId}`);
    checkbox.classList.add('side-bar');
    checkbox.classList.add('is-project-complete-check');  
    if (allOpenProjects[i].projectIsComplete) {
      checkbox.setAttribute('checked', '');
    }
    container.appendChild(checkbox);

    // project title
    const headerTitle = document.createElement('h4');
    headerTitle.classList.add('side-bar-list');
    headerTitle.classList.add('side-bar');
    
    headerTitle.setAttribute('data-id', `${allOpenProjects[i].projectId}`);
    headerTitle.innerHTML = allOpenProjects[i].projectTitle
    container.appendChild(headerTitle);

    // delete project button
    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.classList.add('delete-project');
    deleteProjectButton.classList.add('side-bar');
    deleteProjectButton.setAttribute('data-id', `${allOpenProjects[i].projectId}`);
    deleteProjectButton.innerHTML = 'Remove';
    container.appendChild(deleteProjectButton)
  }

  sideBarProjects.addEventListener('click', clickSideBar);

  // project is complete checkbox
  const allCheckBoxes = document.querySelectorAll('.is-project-complete-check');

  allCheckBoxes.forEach(box => box.addEventListener('change', isCompleteCheck));

  // remove project action
  const deleteProjectButton = document.querySelectorAll('.delete-project');

  deleteProjectButton.forEach(button => button.addEventListener('click', removeProject));
}

export { listAllProjectsSideBar }