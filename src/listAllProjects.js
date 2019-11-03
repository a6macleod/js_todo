const listAllProjects = (allOpenProjects) => {
  
  const projectList = document.querySelector('#project-list');

  for (let i = 0; i < allOpenProjects.length; i++) {
    // project container
    const container = document.createElement('div');
    container.setAttribute('data-id', `${allOpenProjects[i].projectId}`);
    container.classList.add('side-project-container');
    projectList.appendChild(container);

    // complete check box
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('data-id', `${allOpenProjects[i].projectId}`);
    container.appendChild(checkbox);

    // project title
    const headerTitle = document.createElement('h4');
    headerTitle.classList.add('side-bar-list');
    headerTitle.setAttribute('data-id', `${allOpenProjects[i].projectId}`);
    headerTitle.innerHTML = allOpenProjects[i].projectTitle
    container.appendChild(headerTitle);

    // delete
    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.classList.add('delete-project');
    deleteProjectButton.setAttribute('data-id', `${allOpenProjects[i].projectId}`);
    deleteProjectButton.innerHTML = 'Delete';
    container.appendChild(deleteProjectButton)

  }

  /*
  <table>
    <tr>
      <th>completed</th>
      <th>project</th>
      <th>Priority</th>
      <th>Due Date</th>
      <th>Delete</th>
    </tr>
  </table>
  */

  // add event delegation to have the list of open projects open to current project when clicked

}

export { listAllProjects }