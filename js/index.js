(function () {
  let devWidth = 750;
  let clientWidth = document.documentElement.clientWidth;
  let radio = clientWidth / devWidth;
  document.documentElement.style.fontSize = radio * 200 + 'px';
})();
