import { displayController } from "./displayController.js";

const updateLocalStorage = () => {
  const allProjects = displayController.allProjects;

  localStorage.setItem("projects", JSON.stringify(allProjects));
};

export { updateLocalStorage };
