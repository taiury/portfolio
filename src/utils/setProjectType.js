function setProjectType(idFromElementClicked, buttons) {
  const { allProjects, frontendProjects, backendProjects, mobileProjects } =
    buttons;

  allProjects.className = 'btn-options';
  frontendProjects.className = 'btn-options';
  backendProjects.className = 'btn-options';
  mobileProjects.className = 'btn-options';

  if (idFromElementClicked === allProjects.id)
    allProjects.className = 'btn-options btn-options-selected';
  if (idFromElementClicked === frontendProjects.id)
    frontendProjects.className = 'btn-options btn-options-selected';
  if (idFromElementClicked === backendProjects.id)
    backendProjects.className = 'btn-options btn-options-selected';
  if (idFromElementClicked === mobileProjects.id)
    mobileProjects.className = 'btn-options btn-options-selected';
}

module.exports = setProjectType;
