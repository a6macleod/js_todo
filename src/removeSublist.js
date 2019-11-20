import { listAllProjectsSideBar } from './listAllProjectsSideBar.js'
import { find } from './find.js'
import { displayController } from './displayController.js'
import { mainDisplay } from './mainDisplay.js'
import { updateLocalStorage } from './updateLocalStorage.js'

const removeSublist = (event, currentProject) => {

  const sublistId = event.target.getAttribute('data-subid');
  const projectIndex = find.findProjectIndex(currentProject);
  const sublists = displayController.allProjects[projectIndex].sublists;
  const sublistIndex = findSublistIndex(sublistId);

  function findSublistIndex(sublistId) {
    for (let i = 0; i < sublists.length; i++) {
      if (sublists[i].sublistId == sublistId) {
        return i;
      }
    }
  }

  function render () {
    // update main display not everything / stay on the display
    mainDisplay(currentProject.projectId)

    updateLocalStorage();
  }

  function removeSublist (event) {
    sublists.splice(sublistIndex, 1);
    render();
  }


removeSublist(event);

}

export { removeSublist }