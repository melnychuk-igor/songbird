function menu() {
  // start burger menu
  const burger = document.querySelector('.burger'),
    header = document.querySelector('.header'),
    // html = document.querySelector('html'),
    menu = document.querySelector('.header__menu');

  burger.addEventListener('click', () => {
    if (burger.classList.contains('header__menu_active')) {
      burger.classList.remove('header__menu_active');
      menu.classList.remove('header__menu_active');
      header.classList.remove('header__menu_active');
    } else {
      burger.classList.add('header__menu_active');
      menu.classList.add('header__menu_active');
      header.classList.add('header__menu_active');
    }
  });
  // end burger menu

  // start closing the menu by clicking outside it
  document.documentElement.addEventListener('click', function (event) {
    if (
      event.target.classList[0] !== 'burger' &&
      event.target.tagName !== 'UL' &&
      event.target.tagName !== 'LI'
    ) {
      menu.classList.remove('header__menu_active');
      burger.classList.remove('header__menu_active');
      header.classList.remove('header__menu_active');
    }
  });
  // end closing the menu by clicking outside it
}

export default menu;
