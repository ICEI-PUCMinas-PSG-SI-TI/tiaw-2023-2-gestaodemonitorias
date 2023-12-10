document.addEventListener('DOMContentLoaded', function() {
  const sairBtn = document.getElementById("sairBtn");
  sairBtn.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.clear();
  window.location.href = "/codigo/src/screens/Login/login.html";
  });
});