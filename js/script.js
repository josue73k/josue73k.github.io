// const hamburger = document.querySelector('.hamburger-button');
// const menuItems = document.querySelector('.navsection-ul');

// hamburger.addEventListener('click',()=>{
//     menuItems.classList.toggle('show-menu');
// });

((d) => {
  const $menuBtn = d.querySelector('.header-menu-btn'),
    $navMenu = d.querySelector('.header-nav-menu');

  $menuBtn.addEventListener('click', () => {
    $menuBtn.firstElementChild.classList.toggle('none');
    $menuBtn.lastElementChild.classList.toggle('none');
    $navMenu.classList.toggle('is-active');
  });

  d.addEventListener('click', (e) => {
    if (!e.target.matches('.header-nav-menu a')) return false;

    $menuBtn.firstElementChild.classList.remove('none');
    $menuBtn.lastElementChild.classList.add('none');
    $navMenu.classList.remove('is-active');
  });
})(document);
