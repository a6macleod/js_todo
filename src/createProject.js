
function createProject = () => {
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

  function createProjectId() {
    // code for a new project ID
  }

  const createProject = (projectTitle, dueDate, priority, aboutProject) => {
      projectId: = createProjectId(),
      projectTitle: = 'default project',
      dueDate: = "10/31/2019",
      priority: = false,
      aboutProject: = 'about this project',
      projectIsComplete: = false,
      sublist: = []
    };

}

export { createProject };