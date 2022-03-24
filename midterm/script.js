let navBar, navBarIcon, navToggle, arrows;

function changeIcons() {
  arrows = document.querySelectorAll('.arrow');
  if (document.body.clientWidth < 1000) {
    for (let arrow of arrows) {
      arrow.src = '/img/icon-arrow-dark.svg';
    }
  } else {
    for (let arrow of arrows) {
      arrow.src = '/img/icon-arrow-light.svg';
    }
  }
}

window.onload = function () {
  navBar = document.getElementById('nav');
  navBarIcon = document.getElementById('nav-icon');
  navToggle = false;

  changeIcons();

  document.getElementById('nav-tgl').addEventListener('click', () => {
    navToggle = !navToggle;
    if (navToggle) {
      navBar.style.display = 'flex';
      navBarIcon.src = '/img/icon-close.svg';
    } else {
      navBar.style.display = 'none';
      navBarIcon.src = '/img/icon-hamburger.svg';
    }
  });

  for (let btn of document.getElementsByClassName('nav-btn')) {
    btn.addEventListener('click', function () {
      var toToggle = btn.getAttribute('to-toggle');

      for (let b of document.getElementsByClassName('nav-btn')) {
        if (toToggle != b.getAttribute('to-toggle')) {
          document.getElementById(b.getAttribute('to-toggle')).style.display = 'none';
          b.lastChild.style.transform = 'rotate(0deg)';
          b.setAttribute('bools', 'no');
        }
      }

      let toToggleElem = document.getElementById(toToggle);
      if (btn.getAttribute('bools') == 'no') {
        toToggleElem.style.display = 'block';
        btn.setAttribute('bools', 'yes');
        btn.lastChild.style.transform = 'rotateX(-180deg)';
      } else {
        toToggleElem.style.display = 'none';
        btn.setAttribute('bools', 'no');
        btn.lastChild.style.transform = 'rotate(0deg)';
      }
    });
  }

};
