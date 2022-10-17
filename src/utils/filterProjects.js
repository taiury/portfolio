function filterProjects(allProjects, projectType) {
  if (projectType === 'all') return allProjects;
  return allProjects.filter((project) => project.type === projectType);
}

module.exports = filterProjects;
