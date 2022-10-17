function myNameIs(name = '') {
  const tag = document.getElementById('my-name');
  let letterCount = 0;

  const refSetInteval = setInterval(() => {
    const partOfTheName = name.substring(0, letterCount);
    tag.innerText = partOfTheName;
    letterCount++;
    if (partOfTheName.length === name.length) {
      clearInterval(refSetInteval);
    }
  }, 100);
}

module.exports = myNameIs;
