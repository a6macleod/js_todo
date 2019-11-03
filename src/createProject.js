
const createProject = (sampleProject) => {
  // fill out the information in the current project window
  // "save button" will push all the information to an object (here) 
  // push the object to an array stored in index.js

  // projectTitle (string)
  // dueDate (date)
  // Priority (true/false)
  // aboutProject (string -> paragraph)
  // projectIsComplete (true/false)
  // any number of sublists
  // sublistIsComplete

  const title = sampleProject[0];
  const date = sampleProject[1];
  const isPriority = sampleProject[2];
  const about = sampleProject[3];

  function calculateId() {
    console.log(`from createProject.js`)
    return 2;
  }

  const newProject = () => {
      return {
        projectId: 3,
        projectTitle: title,
        dueDate: date,
        aboutProject: about,
        priority: isPriority,
        projectIsComplete: false,
        sublist: []
        };
    };

return newProject();
}

export { createProject };