/*console.log('hannan');*/

const links = document.querySelector('.links');
const hamburgerIcon = document.querySelector('.hamburger');

let colorIndex = 0;
const colors = ['white', 'transparent']





hamburgerIcon.addEventListener('click', showLinks);



function showLinks() {
  links.classList.toggle('show-links');
  
  links.style.setProperty('--border-color', colors[colorIndex]);
  
  colorIndex = colorIndex >= colors.length - 1 ? 0 : colorIndex + 1;
  
  if(colorIndex == 0){
    links.style.setProperty('--delay', '0.54s');
  }
  else {
    links.style.setProperty('--delay', '0s');
  }


}

/*
console.log(document.querySelector('html').clientWidth);
980
console.log(document.querySelector('html').clientHeight);

1870
*/