import { displayController } from "./displayController.js";

const createProject = sampleProject => {
  const allProjects = displayController.allProjects;

  function calculateId() {
    let id = 0;
    for (let i = 0; i < allProjects.length; i++) {
      if (id <= allProjects[i].projectId) {
        id = allProjects[i].projectId + 1;
      }
    }
    return id;
  }

  const id = calculateId();
  const title = sampleProject[0];
  const isPriority = sampleProject[1];
  const about = sampleProject[2];

  const newProject = () => {
    return {
      projectId: id,
      projectTitle: title,
      aboutProject: about,
      priority: isPriority,
      projectIsComplete: false,
      sublists: []
    };
  };

  return newProject();
};

export { createProject };
