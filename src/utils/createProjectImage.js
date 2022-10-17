function createProjectImage(imageUrl, imageDescription) {
  const projectImage = document.createElement('img');
  projectImage.setAttribute('src', imageUrl);
  projectImage.setAttribute('alt', imageDescription);

  return projectImage;
}

module.exports = createProjectImage;
