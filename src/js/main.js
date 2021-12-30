const burger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu__close'),
      bodyContent = document.querySelector('body');

burger.addEventListener('click', ()=>{
    menu.classList.add('active');
    bodyContent.style.overflow = 'hidden';
});

menuClose.addEventListener('click', ()=>{
    menu.classList.remove('active');
    bodyContent.style.overflow = '';
});

//================={Progress check}=================//

const progress = document.querySelectorAll('.skillz__progress-mumeric'),
      progressDivider = document.querySelectorAll('.skillz__progress-on');

progress.forEach((i, k) => {
    progressDivider[k].style.width = i.innerHTML;
});