import { displayController } from './displayController.js'

const updateLocalStorage = () => {

  localStorage.setItem('allOpenProjects', JSON.stringify(displayController.allProjects));

}

export { updateLocalStorage }