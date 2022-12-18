const button = document.getElementById('btn');
button.addEventListener('click', function () {
  var curval = this.innerHTML;
  this.innerHTML = parseInt(curval) + 1;
});
