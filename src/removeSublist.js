import { listAllProjectsSideBar } from './listAllProjectsSideBar.js'

const removeSublist = (event, currentProject, allOpenProjects) => {

 function findProjectInArray (clickedId) {
   for (const project of allOpenProjects) {
     if (clickedId == project.projectId) {
       return project;
      }
    return project;
   }
  return project;
 }

  const sublistId = event.target.getAttribute('data-subid');
  const projectId = currentProject.projectId;






  function removeSublist (event) {
    //console.log(allOpenProjects[projectId])
    //allOpenProjects[projectId].sublist.splice(sublistId, 1);
    listAllProjectsSideBar(allOpenProjects);
  }


removeSublist(event);

}

export { removeSublist }