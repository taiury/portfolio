async function getAllProjects() {
  return await fetch('/frontend/assets/projects.json').then((response) =>
    response.json(),
  );
}

module.exports = getAllProjects;
