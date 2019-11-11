
const createProject = (sampleProject, allOpenProjects) => {

  function calculateId(allOpenProjects) {
    let id = 0;
    for (let i = 0; i < allOpenProjects.length; i++) {
      if (id <= allOpenProjects[i].projectId) {
        id = allOpenProjects[i].projectId + 1;
      }
    }
    return id;
  }

  const id = calculateId(allOpenProjects);
  const title = sampleProject[0];
  const date = sampleProject[1];
  const isPriority = sampleProject[2];
  const about = sampleProject[3];



  const newProject = () => {
      return {
        projectId: id,
        projectTitle: title,
        dueDate: date,
        aboutProject: about,
        priority: isPriority,
        projectIsComplete: false,
        sublists: []
        };
    };

return newProject();
}

export { createProject };