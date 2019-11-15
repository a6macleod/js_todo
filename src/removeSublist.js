import { listAllProjectsSideBar } from './listAllProjectsSideBar.js'
import { find } from './find.js'

const removeSublist = (event, currentProject, allOpenProjects) => {


  const sublistId = event.target.getAttribute('data-subid');
  const projectIndex = find.findProjectIndex(currentProject, allOpenProjects);
  const sublists = allOpenProjects[projectIndex].sublists;
  const sublistIndex = findSublistIndex(sublistId);

  function findSublistIndex(sublistId) {
    for (let i = 0; i < sublists.length; i++) {
      if (sublists[i].sublistId == sublistId) {
        return i;
      }
    }
  }

  function removeSublist (event) {
    sublists.splice(sublistIndex, 1);
    listAllProjectsSideBar(allOpenProjects);
  }


removeSublist(event);

}

export { removeSublist }