const displayController = (() => {

  const allProjects =  JSON.parse(localStorage.getItem('projects')) || [{
      'projectId': 1,
      'projectTitle': 'Project 1',
      'priority': true,
      'aboutProject': 'Project 1 is very important',
      'projectIsComplete': false,
      'sublists': 
        [ 
          {
            'sublistId': 0,
            'sublistTitle': 'Project 1 sublist 1',
            'sublistComplete': true
          },
          {
            'sublistId': 1,
            'sublistTitle': 'Project 1 sublist 2',
            'sublistComplete': false
          },
          {
            'sublistId': 2,
            'sublistTitle': 'Project 1 sublist 3',
            'sublistComplete': false
          }
        ]
    }, 
    {
      'projectId': 2,
      'projectTitle': 'Project 2',
      'priority': false,
      'aboutProject': 'Project 2 is not so important',
      'projectIsComplete': false,
      'sublists': 
        [
          {
            'sublistId': 0,
            'sublistTitle': 'Project 2 sublist 1',
            'sublistComplete': true
          }
        ]
      },
      {
        'projectId': 3,
        'projectTitle': 'Project 3',
        'priority': false,
        'aboutProject': 'Project 3 is not important',
        'projectIsComplete': false,
        'sublists': 
          [
            {
              'sublistId': 0,
              'sublistTitle': 'Project 3 sublist 1',
              'sublistComplete': true
            }
          ]
      }
  ];

  let currentMainDisplay = allProjects[0]

return { allProjects, currentMainDisplay}
})();

export { displayController }