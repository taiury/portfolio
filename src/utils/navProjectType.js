const getAllProjects = require('./getAllProjects');
const appendProjectsInPortfolio = require('./appendProjectsInPortfolio');
const filterProjects = require('./filterProjects');
const setProjectType = require('./setProjectType');

async function navProjectType(
  type,
  elementProjectList,
  elementButton,
  buttons,
) {
  const allProjectsJSON = await getAllProjects();

  appendProjectsInPortfolio(
    elementProjectList,
    filterProjects(allProjectsJSON, type),
  );

  setProjectType(elementButton.id, buttons);
}

module.exports = navProjectType;
