import { find } from './find.js'
import { listAllProjectsSideBar } from './listAllProjectsSideBar.js'

const addSubList = (currentProject, allOpenProjects) => {

  const sublistArray = currentProject.sublists;  
  const sublists = document.querySelector('.sublists');
  const sublistContainer = document.querySelector('.sublist-container');

  // Create sublist form
  function createSublistForm() {

    // Sublist header
    const sublistHeaderLabel = document.createElement('label');
    sublistHeaderLabel.setAttribute('for', 'sublist-header');
    sublistHeaderLabel.classList.add('form-label');
    sublistHeaderLabel.classList.add('sublistForm');
    sublistHeaderLabel.innerHTML = 'Checklist Item';
    sublistContainer.appendChild(sublistHeaderLabel);

    const sublistHeader = document.createElement('input');
    sublistHeader.setAttribute('type', 'text');
    sublistHeader.id = 'sublist-header';
    sublistHeader.classList.add('form-input');
    sublistHeader.classList.add('sublistForm');
    sublistHeader.setAttribute('value', 'New Item');
    sublistHeader.required = true;
    sublistContainer.appendChild(sublistHeader);

    // create sublist save button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.id = 'sublist-submit-button';
    submitButton.classList.add('form-button');
    submitButton.classList.add('sublistForm');
    submitButton.innerHTML = 'Submit Item';
    sublistContainer.appendChild(submitButton);
  }

  function generateId() {
    let newId = 0;
    for (let i = 0; i < sublistArray.length; i++) {
      if (sublistArray[i].sublistId > newId) {
        newId = sublistArray[i].sublistId;
      }
    }
    return newId + 1;
  }

  function generateSublistObject() {
    const sublistHeader = document.querySelector('#sublist-header');

    const newSublist = {
      'sublistId': generateId(),
      'sublistTitle': sublistHeader.value,
      'sublistComplete': false
    };
    return newSublist;
  }

  //function updateDisplay() {
  //  updateCurrentProjectDisplay(currentProject);
  //}

  function updateMainStorageArray (currentProject) {
    const index = find.findProjectIndex(currentProject, allOpenProjects);
    allOpenProjects[index] = currentProject;
  }

  function removeSublistForm () {
    const sublistForms = document.querySelectorAll('.sublistForm');
    sublistForms.forEach(item => item.remove());
  }

  function saveSublist() {
    const newSublist = generateSublistObject();

    currentProject.sublists.push(newSublist);

    updateMainStorageArray(currentProject);

    listAllProjectsSideBar(allOpenProjects);

    removeSublistForm();
  }

  createSublistForm();

  const submitButton = document.querySelector('#sublist-submit-button');
  submitButton.addEventListener('click', saveSublist);


  ///// Work on updating the allOpenProjects array and the currentProject variable and the display
};

export { addSubList };
