const myNameIs = require('./animations/myNameIs');
const scrollProjectListLeftAndRight = require('./actions/scrollProjectListLeftAndRight');
const setTypeProjectList = require('./actions/setTypeProjectList');
const appendProjectsInPortfolio = require('./utils/appendProjectsInPortfolio');
const filterProjects = require('./utils/filterProjects');
const getAllProjects = require('./utils/getAllProjects');
const linkForContact = require('./actions/linkForContact');

myNameIs('Taiury Alexandre');
scrollProjectListLeftAndRight();
linkForContact();

(async function () {
  const projectList = document.querySelector('#project-list');
  const allProjectsJSON = await getAllProjects();
  appendProjectsInPortfolio(
    projectList,
    filterProjects(allProjectsJSON, 'all'),
  );

  await setTypeProjectList();
})();
