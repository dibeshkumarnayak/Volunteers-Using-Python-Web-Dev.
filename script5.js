document.getElementById("volunteerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for applying! We’ll get back to you soon.");
  this.reset();
});
