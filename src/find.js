  const find = ((event) => {

  function getId (event) {
    const projectId = event.target.getAttribute('data-id');
    return projectId;
  }

  function findProjectInArray (clickedId, allOpenProjects) {
    for (const project of allOpenProjects) {
      if (clickedId == project.projectId) {
        return project;
      }
    }
  }

  function findProjectIndex (currentProject, allOpenProjects) {
    for (let i = 0; i < allOpenProjects.length; i++) {
      if (currentProject.projectId == allOpenProjects[i].projectId) {
        return i;
      }
    }
  }
 
 return { getId, findProjectInArray, findProjectIndex }

 })();

 export { find }