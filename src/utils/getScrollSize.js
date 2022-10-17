function getScrollSize() {
  if (window.innerWidth <= 425) return 1080 / 3;
  if (window.innerWidth <= 1024) return 1080 / 2;
  return 1080;
}

module.exports = getScrollSize;
