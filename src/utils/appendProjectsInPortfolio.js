const addElementInProjectPack = require('./addElementInProjectPack');
const fixDesignProblemInProjectPack = require('./fixDesignProblemInProjectPack');

function appendProjectsInPortfolio(
  projectList,
  projectsArray = [],
  clear = true,
) {
  const newProjectsPack = document.createElement('div');
  const isDesignProblem = projectsArray.length > 2 && projectsArray.length <= 4;

  newProjectsPack.setAttribute('class', 'pack-of-projects');
  if (clear) projectList.innerHTML = '';

  addElementInProjectPack(projectsArray, newProjectsPack);

  if (isDesignProblem) {
    fixDesignProblemInProjectPack(projectsArray, newProjectsPack);
  }

  projectList.appendChild(newProjectsPack);

  if (projectsArray.length - 6 >= 0) {
    projectsArray.splice(0, 6);
    appendProjectsInPortfolio(projectList, projectsArray, false);
  }
}

module.exports = appendProjectsInPortfolio;
