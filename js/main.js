'use strict';

{
  //-------------------------------------------------- 
  // スクロール関係
  // --------------------------------------------------

  // to-topボタン関係
  const toTop = document.getElementById('to-top');

  // ボタン押した時の動作
  toTop.addEventListener('click', () => {

      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    });

  // スクロール700px超えてボタンの出現
  window.addEventListener('scroll', scroll_event);

  function scroll_event() {

    if(window.pageYOffset > 700) {
      toTop.style.opacity = '1';
    } else if (window.pageYOffset < 700) {
      toTop.style.opacity = '0';
    }
  };

  // ---------------------------------------------
  // ハンバーガーボタンの挙動関係
  // ---------------------------------------------
  const header = document.getElementById('header');
  const headerNav = document.getElementById('header-nav');
  const tripletBtn = document.getElementById('tripleline-btn');
  const mask = document.querySelector('.mask');

  // ボタンを押した時の挙動
  tripletBtn.addEventListener('click', () => {
    header.classList.toggle('open');
  });

  // マスクレイヤーをクリックした時の挙動
  mask.addEventListener('click', () => {
    header.classList.remove('open');
  });








}
