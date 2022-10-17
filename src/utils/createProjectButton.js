function createProjectButton(color, repositoryName) {
  const projectButton = document.createElement('button');

  projectButton.setAttribute(
    'class',
    `btn-link-repository-${color} text-bold paragraph`,
  );

  projectButton.innerText = 'Repositório';
  projectButton.addEventListener('click', () => {
    window.open(`https://github.com/taiury/${repositoryName}`, '_blank');
  });
  return projectButton;
}

module.exports = createProjectButton;
