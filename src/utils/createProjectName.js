function createProjectName(name, color) {
  const containerProjectName = document.createElement('div');
  const projectName = document.createElement('h6');

  projectName.className = 'paragraph';
  projectName.innerText = name;
  containerProjectName.className = `container-project-name-${color}`;
  containerProjectName.appendChild(projectName);

  return containerProjectName;
}

module.exports = createProjectName;
