const clearDisplay = () => {

  const form = document.querySelector('#new-project-form');

  function clearForm () {
    // code to clear the form
    while (form.firstChild) {
      form.removeChild(form.firstChild);
    }
  }

  clearForm();
  
  const displayArea = document.querySelector('.display');
  

  // edit button
  const removeEditButton = document.querySelector('.edit-project');
  if (removeEditButton) {
    displayArea.removeChild(displayArea.firstChild);
  }

  // Header
  const header = document.querySelector('.projectTitle');
  header.innerHTML = '';


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
