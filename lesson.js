const menu = document.getElementById('menu');
menu.onclick = () => {
  menu.classList.toggle('open');
  console.log(menu);
};

const elm = document.getElementById('abc');
elm.innerText = 'xyz';

//