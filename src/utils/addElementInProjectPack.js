const createProjectName = require('./createProjectName');
const createProjectContent = require('./createProjectContent');
const createProjectImage = require('./createProjectImage');
const createProjectButton = require('./createProjectButton');

function addElementInProjectPack(projectArray, projectPack) {
  for (
    let countLoop = 0;
    countLoop < 6 && countLoop <= projectArray.length - 1;
    countLoop++
  ) {
    const { name, color, imageUrl, imageDescription, repositoryName } =
      projectArray[countLoop];
    const projectContent = createProjectContent();
    projectContent.appendChild(createProjectName(name, color));
    projectContent.appendChild(createProjectImage(imageUrl, imageDescription));
    projectContent.appendChild(createProjectButton(color, repositoryName));
    projectPack.appendChild(projectContent);
  }
}

module.exports = addElementInProjectPack;
