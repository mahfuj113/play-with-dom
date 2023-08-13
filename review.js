document.getElementById("submit-btn").addEventListener("click",function(){
  const textArea = document.getElementById("text-area").value;
  
  const review = document.getElementById("review");
  
  const p = document.createElement("p");
  p.innerText = textArea;
  review.appendChild(p);
  document.getElementById("text-area").value = "";
})