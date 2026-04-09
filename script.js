function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.onclick = function (event) {
  const studentModal = document.getElementById("studentModal");
  const staffModal = document.getElementById("staffModal");

  if (event.target === studentModal) {
    studentModal.style.display = "none";
  }

  if (event.target === staffModal) {
    staffModal.style.display = "none";
  }
};

function studentLogin() {
  alert("Student login button clicked");
}

function staffLogin() {
  alert("Staff login button clicked");
}

function sendMessage() {
  alert("Your message has been submitted successfully");
}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "100%";
    navLinks.style.right = "5%";
    navLinks.style.background = "#ffffff";
    navLinks.style.padding = "18px";
    navLinks.style.borderRadius = "14px";
    navLinks.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";
    navLinks.style.width = "220px";
  }
});