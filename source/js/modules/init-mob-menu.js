export const initMobMenu = () => {
  const TABLET_WIDTH = 768;
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  const button = header.querySelector('.header__menu-button');
  const navLinks = header.querySelectorAll('.header__nav-item a');
  let isMenuOpen = true;

  const onMenuOverlayClick = (evt) => {
    if (!evt.target.closest('.header__inner')) {
      hideMenu();
    }
  };

  const openMenu = () => {
    if (window.innerWidth < TABLET_WIDTH) {
      body.classList.add('scroll-lock');
    }
    header.classList.remove('header--closed');
    header.classList.add('header--opened');
    isMenuOpen = true;
    if (window.innerWidth < TABLET_WIDTH) {
      navLinks.forEach((link) => {
        link.addEventListener('click', hideMenu);
      });

      setTimeout(() => {
        header.addEventListener('click', onMenuOverlayClick);
      }, 500);
    }
  };

  const hideMenu = () => {
    body.classList.remove('scroll-lock');
    header.classList.add('header--closed');
    header.classList.remove('header--opened');
    isMenuOpen = false;
    header.removeEventListener('click', onMenuOverlayClick);
  };

  header.classList.remove('header--no-js');

  if (window.innerWidth < TABLET_WIDTH) {
    hideMenu();
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= TABLET_WIDTH) {
      openMenu();
      navLinks.forEach((link) => {
        link.removeEventListener('click', hideMenu);
      });
    } else {
      hideMenu();
    }
  });

  button.addEventListener('click', () => {
    if (isMenuOpen) {
      hideMenu();
    } else {
      openMenu();
    }
  });
};
