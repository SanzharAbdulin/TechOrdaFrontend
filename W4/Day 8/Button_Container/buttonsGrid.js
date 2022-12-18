const mainbutton = document.getElementById('btn5');
const order = [1, 2, 3, 6, 9, 8, 7, 4];
mainbutton.addEventListener('click', function () {
  order.unshift(order.pop());
  document.getElementById('btn1').innerText = order[0];
  document.getElementById('btn2').innerText = order[1];
  document.getElementById('btn3').innerText = order[2];
  document.getElementById('btn4').innerText = order[7];
  document.getElementById('btn6').innerText = order[3];
  document.getElementById('btn7').innerText = order[6];
  document.getElementById('btn8').innerText = order[5];
  document.getElementById('btn9').innerText = order[4];
});
