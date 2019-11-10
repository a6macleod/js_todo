import { mainDisplay } from "./mainDisplay.js";

const addSubList = openProject => {
  const sublistArray = openProject.sublists;  
  const sublistContainer = document.querySelector(".sublist-container");
  const addSubListButton = document.querySelector(".add-sublist-button");
  // hide the add button
  addSubListButton.classList.toggle("hidden");

  // Create sublist form
  function createSublistForm() {
    // Sublist header
    const sublistHeaderLabel = document.createElement("label");
    sublistHeaderLabel.setAttribute("for", "sublist-header");
    sublistHeaderLabel.classList.add("form-label");
    sublistHeaderLabel.innerHTML = "Checklist Item";
    sublistContainer.appendChild(sublistHeaderLabel);

    const sublistHeader = document.createElement("input");
    sublistHeader.setAttribute("type", "text");
    sublistHeader.id = "sublist-header";
    sublistHeader.classList.add("form-input");
    sublistHeader.setAttribute("value", "New Item");
    sublistHeader.required = true;
    sublistContainer.appendChild(sublistHeader);

    // create sublist save button
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.id = "sublist-submit-button";
    submitButton.classList.add("form-button");
    submitButton.innerHTML = "Submit Item";
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
      'sublistComplete;': false
    };
    return newSublist;
  }
/*
  function updateMainStorageArray() {
    for (let i = 0; i < allOpenProjects.length; i++) {
      let project = allOpenProjects[i];

      if (project.projectId == openProject.projectId) {
        allOpenProjects[i] = openProject;
      }
    }
  }
*/
  function updateDisplay() {
    currentProject = openProject;
    updateCurrentProjectDisplay(currentProject);
  }

  function saveSublist() {
    const newSublist = generateSublistObject();

    openProject.sublists = sublistArray.push(newSublist);

    // Push object to allOpenProjects sublists array
    //updateMainStorageArray();

    updateDisplay();
  }

  createSublistForm();

  const submitButton = document.querySelector("#sublist-submit-button");
  submitButton.addEventListener("click", saveSublist);


  ///// Work on updating the allOpenProjects array and the currentProject variable and the display
  return { openProject }
};

export { addSubList };
