import { displayController } from "./displayController.js";

const find = (() => {
  const allProjects = displayController.allProjects;

  function getId(event) {
    const projectId = event.target.getAttribute("data-id");
    return projectId;
  }

  function findProjectInArray(clickedId) {
    for (const project of allProjects) {
      if (clickedId == project.projectId) {
        return project;
      }
    }
  }

  function findProjectIndex(currentProject) {
    for (let i = 0; i < allProjects.length; i++) {
      if (currentProject.projectId == allProjects[i].projectId) {
        return i;
      }
    }
  }

  return { getId, findProjectInArray, findProjectIndex };
})();

export { find };
