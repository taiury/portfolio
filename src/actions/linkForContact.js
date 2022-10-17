function linkForContact() {
  const btnLinkGithub = document.querySelector('#btn-link-github');
  const btnLinkEmail = document.querySelector('#btn-link-email');
  const btnLinkTwitter = document.querySelector('#btn-link-twitter');

  btnLinkGithub.addEventListener('click', () => {
    window.open('https://github.com/taiury', '_blank');
  });

  btnLinkEmail.addEventListener('click', () => {
    window.open('mailto: taiuryalexandre.c@gmail.com', '_blank');
  });

  btnLinkTwitter.addEventListener('click', () => {
    window.open('https://twitter.com/AlexandreTaiury', '_blank');
  });
}

module.exports = linkForContact;
