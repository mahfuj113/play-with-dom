// for + button
let total = 0;
function clickMe() {
  const count = document.getElementById("count");
  total += 1;
  count.innerText = total;
}
//  for - button
const minusBtn = document.getElementById("minus-btn").addEventListener('click',function(){
  const count = document.getElementById("count");
  total--
  count.innerText = total;
})