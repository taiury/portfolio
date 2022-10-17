const createProjectContent = require('./createProjectContent');

function fixDesignProblemInProjectPack(projectArray, projectPack) {
  for (let countLoop = projectArray.length; countLoop <= 5; countLoop++) {
    const projectContent = createProjectContent();
    projectPack.appendChild(projectContent);
  }
}

module.exports = fixDesignProblemInProjectPack;
