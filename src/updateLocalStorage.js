const updateLocalStorage = (allOpenProjects) => {

  localStorage.setItem('allOpenProjects', JSON.stringify(allOpenProjects));

}

export { updateLocalStorage }