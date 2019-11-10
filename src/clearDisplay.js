const clearDisplay = () => {
  
  const displayArea = document.querySelector('.display');
  // edit button
  const removeEditButton = document.querySelector('.edit-project');
  if (removeEditButton) {
    displayArea.removeChild(displayArea.firstChild);
  }

  // Header
  const header = document.querySelector('.projectTitle');
  header.innerHTML = '';

  // Due Date
  const dueDateTitle = document.querySelector('.dueDate-title');
  dueDateTitle.innerHTML = '';

  const dueDate = document.querySelector('.dueDate');
  dueDate.innerHTML = '';


  // priority
  const priority = document.querySelector('.priority');
  priority.innerHTML = '';


  // About Section
  const aboutTitle = document.querySelector('.about-title');
  aboutTitle.innerHTML = '';

  const about = document.querySelector('.about');
  about.innerHTML = '';

  // Sublists
  const checkList = document.querySelector('.check-list-title');
  checkList.innerHTML = '';

  const sublists = document.querySelector('.sublists'); 
  // clear out existing sublists from DOM
  while(sublists.firstChild) {
    sublists.removeChild(sublists.firstChild);
  }
}

export { clearDisplay }
