const navProjectType = require('../utils/navProjectType');

async function setTypeProjectList() {
  const allProjects = document.querySelector('#btn-option-all');

  const frontendProjects = document.querySelector('#btn-option-frontend');
  const backendProjects = document.querySelector('#btn-option-backend');
  const mobileProjects = document.querySelector('#btn-option-mobile');
  const projectList = document.querySelector('#project-list');

  const buttons = {
    allProjects,
    frontendProjects,
    backendProjects,
    mobileProjects,
  };

  allProjects.addEventListener('click', async () => {
    projectList.scroll(0, 0);
    await navProjectType('all', projectList, allProjects, buttons);
  });

  frontendProjects.addEventListener('click', async () => {
    projectList.scroll(0, 0);
    await navProjectType('frontend', projectList, frontendProjects, buttons);
  });

  backendProjects.addEventListener('click', async () => {
    projectList.scroll(0, 0);
    await navProjectType('backend', projectList, backendProjects, buttons);
  });

  mobileProjects.addEventListener('click', async () => {
    projectList.scroll(0, 0);
    await navProjectType('mobile', projectList, mobileProjects, buttons);
  });
}

module.exports = setTypeProjectList;
