const getScrollSize = require('../utils/getScrollSize');

function scrollProjectListLeftAndRight() {
  const buttonLeft = document.querySelector('.project-btn-left');
  const buttonRight = document.querySelector('.project-btn-right');
  const listProjects = document.querySelector('#project-list');

  buttonLeft.addEventListener('click', () => {
    listProjects.scroll(listProjects.scrollLeft - getScrollSize(), 0);
  });

  buttonRight.addEventListener('click', () => {
    listProjects.scroll(listProjects.scrollLeft + getScrollSize(), 0);
  });
}

module.exports = scrollProjectListLeftAndRight;
