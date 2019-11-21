import { mainDisplay } from "./mainDisplay.js";
import { clearSideBar } from "./clearSideBar.js";
import { find } from "./find.js";
import { updateLocalStorage } from "./updateLocalStorage.js";
import { displayController } from "./displayController.js";
import { clearDisplay } from "./clearDisplay.js";

const listAllProjectsSideBar = () => {
  const allProjects = displayController.allProjects;

  clearDisplay();
  clearSideBar();

  function updateHighlighting(projectId) {
    // remove old highlighting
    const allSideBarProjects = document.querySelectorAll(
      ".side-project-container"
    );
    allSideBarProjects.forEach(function(project) {
      project.classList.remove("currentProject");
    });

    // set new selectedProject
    const clickedContainer = document.querySelector(
      `div[data-id="${projectId}"]`
    );
    clickedContainer.classList.add("currentProject");
  }

  function updateDisplay(projectId) {
    mainDisplay(projectId);
  }

  function clickSideBar(event) {
    clearDisplay();
    // seperate the remove button
    if (event.target.innerHTML == "🗑") {
      return;
    }
    let projectId = find.getId(event);
    updateDisplay(projectId);
    updateHighlighting(projectId);
  }

  function removeProject(event) {
    let projectId = find.getId(event);

    for (let i = 0; i < allProjects.length; i++) {
      if (projectId == allProjects[i].projectId) {
        allProjects.splice(i, 1);
      }
    }
    listAllProjectsSideBar();
    updateLocalStorage();
  }

  function isCompleteCheck(event) {
    const projectId = find.getId(event);
    const targetProject = find.findProjectInArray(projectId, allProjects);

    targetProject.projectIsComplete = !targetProject.projectIsComplete;

    allProjects[
      find.findProjectIndex(targetProject, allProjects)
    ] = targetProject;
    updateLocalStorage(allProjects);
  }

  // populate the project list

  const sideBarProjects = document.querySelector("#project-list");
  let firstLoad = true;

  // div for each project
  for (let i = 0; i < allProjects.length; i++) {
    const allProjects = displayController.allProjects;
    const projectId = allProjects[i].projectId;
    // project container
    const container = document.createElement("div");
    container.setAttribute("data-id", `${projectId}`);
    container.classList.add("side-project-container");

    if (firstLoad == true) {
      container.classList.add("currentProject");
      updateDisplay(projectId);
      firstLoad = false;
    }
    sideBarProjects.appendChild(container);

    // completeness check box
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("data-id", `${allProjects[i].projectId}`);
    checkbox.classList.add("side-bar");
    checkbox.classList.add("is-project-complete-check");
    if (allProjects[i].projectIsComplete) {
      checkbox.setAttribute("checked", "");
    }
    container.appendChild(checkbox);

    // priority
    const priority = document.createElement("p");
    priority.setAttribute("data-id", `${allProjects[i].projectId}`);
    priority.classList.add("side-bar");
    priority.classList.add("is-project-priority");
    if (allProjects[i].priority === true) {
      priority.innerHTML = "🌈";
    } else {
      priority.innerHTML = "";
    }
    container.appendChild(priority);

    // project title
    const headerTitle = document.createElement("h4");
    headerTitle.classList.add("side-bar-list");
    headerTitle.classList.add("side-bar");

    headerTitle.setAttribute("data-id", `${allProjects[i].projectId}`);
    headerTitle.innerHTML = allProjects[i].projectTitle;
    container.appendChild(headerTitle);

    // delete project button
    const deleteIcon = document.createElement("p");
    deleteIcon.classList.add("delete-project");
    deleteIcon.classList.add("side-bar");
    deleteIcon.setAttribute("data-id", `${allProjects[i].projectId}`);
    deleteIcon.innerHTML = "🗑";
    container.appendChild(deleteIcon);
  }

  sideBarProjects.addEventListener("click", clickSideBar);

  // project is complete checkbox
  const allCheckBoxes = document.querySelectorAll(".is-project-complete-check");

  allCheckBoxes.forEach(box => box.addEventListener("change", isCompleteCheck));

  // remove project action
  const deleteIcon = document.querySelectorAll(".delete-project");

  deleteIcon.forEach(button => button.addEventListener("click", removeProject));
};

export { listAllProjectsSideBar };
