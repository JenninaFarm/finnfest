
function openClose() {
  let burger = document.getElementsByClassName('burger-wrapper');
  if (burger[0].classList.contains('active')) {
    burger[0].classList.remove('active');
  } else {
    burger[0].classList.add('active');
  }
}

