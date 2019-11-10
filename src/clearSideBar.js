 // lists the current projects on the side bar
const clearSideBar = () => {
  
  const projectList = document.querySelector('#project-list');
  while(projectList.firstChild) {
    projectList.removeChild(projectList.firstChild);
  }
}

export { clearSideBar }