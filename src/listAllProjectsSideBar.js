 // lists the current projects on the side bar
import { mainDisplay } from './mainDisplay.js'
import { clearSideBar } from './clearSideBar.js'

const listAllProjectsSideBar = (allOpenProjects) => {

  clearSideBar();
  
  const sideBarProjects = document.querySelector('#project-list');
  let firstLoad = true;



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
    let projectId = event.target.getAttribute('data-id');
    updateDisplay(projectId);
    updateHighlighting(projectId);
  }



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



    // complete check box
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('data-id', `${allOpenProjects[i].projectId}`);
    checkbox.classList.add('side-bar');
    container.appendChild(checkbox);

    // project title
    const headerTitle = document.createElement('h4');
    headerTitle.classList.add('side-bar-list');
    headerTitle.classList.add('side-bar');
    headerTitle.setAttribute('data-id', `${allOpenProjects[i].projectId}`);
    headerTitle.innerHTML = allOpenProjects[i].projectTitle
    container.appendChild(headerTitle);

    // delete
    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.classList.add('delete-project');
    deleteProjectButton.classList.add('side-bar');
    deleteProjectButton.setAttribute('data-id', `${allOpenProjects[i].projectId}`);
    deleteProjectButton.innerHTML = 'Remove';
    container.appendChild(deleteProjectButton)

  }

  sideBarProjects.addEventListener('click', clickSideBar);
}

export { listAllProjectsSideBar }