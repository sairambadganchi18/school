// ========================
// MODAL FUNCTIONS
// ========================
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.onclick = function (event) {
  const studentModal = document.getElementById("studentModal");
  const staffModal = document.getElementById("staffModal");
  if (event.target === studentModal) studentModal.style.display = "none";
  if (event.target === staffModal) staffModal.style.display = "none";
};

function studentLogin() {
  alert("Student login button clicked");
}

function staffLogin() {
  alert("Staff login button clicked");
}

// ========================
// CONTACT FORM - EMAIL VALIDATION
// ========================
function sendMessage() {
  const email = document.getElementById("inqEmail").value;
  const hint = document.getElementById("emailHint");
  const emailField = document.getElementById("inqEmail");

  if (
    !email.includes("@") ||
    email.indexOf("@") === 0 ||
    email.indexOf("@") === email.length - 1
  ) {
    emailField.classList.add("input-error");
    hint.style.display = "block";
    return;
  }

  emailField.classList.remove("input-error");
  hint.style.display = "none";
  alert("Your message has been submitted successfully!");
  document.getElementById("contactForm").reset();
}

document.getElementById("inqEmail").addEventListener("input", function () {
  const hint = document.getElementById("emailHint");
  if (this.value.includes("@")) {
    this.classList.remove("input-error");
    hint.style.display = "none";
  }
});

// ========================
// MOBILE NAVBAR TOGGLE
// ========================
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

// ========================
// FAQ CHATBOT DATA
// ========================
const faqs = {
  fees: {
    keywords: ["fee", "fees", "cost", "price", "charges", "tuition", "money", "pay"],
    answer:
      "📋 <strong>School Fees:</strong><br>• Primary (1–5): ₹18,000/year<br>• Middle (6–8): ₹22,000/year<br>• Secondary (9–10): ₹26,000/year<br><br>Fees include tuition, books, and activity charges. EMI options are available. Contact our office for exact details.",
  },
  admission: {
    keywords: ["admission", "apply", "enroll", "join", "registration", "register", "new student"],
    answer:
      "📝 <strong>Admission Process:</strong><br>1. Fill the online inquiry form below<br>2. Collect the application form from school office<br>3. Submit required documents (birth certificate, previous marksheets, photos)<br>4. Attend a brief interaction session<br>5. Pay fees to confirm your seat<br><br>Admissions are open from January to May.",
  },
  timing: {
    keywords: ["timing", "time", "hours", "schedule", "when", "open", "close", "school time"],
    answer:
      "🕗 <strong>School Timings:</strong><br>• School Days: Monday to Saturday<br>• School Hours: 8:00 AM – 2:00 PM<br>• Office Hours: 8:00 AM – 4:00 PM<br>• Summer Schedule: 7:30 AM – 12:30 PM<br><br>School is closed on all Sundays and national holidays.",
  },
  facilities: {
    keywords: ["facilit", "lab", "library", "sport", "ground", "classroom", "smart", "digital", "computer"],
    answer:
      "🏫 <strong>Our Facilities:</strong><br>• 25+ Smart digital classrooms<br>• Science & Computer labs<br>• Well-stocked library<br>• Sports ground & indoor gym<br>• Music & art rooms<br>• Safe drinking water & clean washrooms<br>• CCTV security throughout campus",
  },
  transport: {
    keywords: ["transport", "bus", "van", "pickup", "drop", "vehicle", "commute"],
    answer:
      "🚌 <strong>School Transport:</strong><br>Yes! We provide safe transport across Solapur city.<br>• Routes cover major areas & nearby villages<br>• GPS-tracked buses<br>• Trained drivers & female attendants<br>• Transport fees: ₹5,000–₹8,000/year depending on distance<br><br>Contact the office to check routes.",
  },
  staff: {
    keywords: ["teacher", "staff", "ratio", "faculty", "qualified", "experienced", "principal"],
    answer:
      "👩‍🏫 <strong>Our Staff:</strong><br>• 90+ qualified and experienced teachers<br>• Teacher-student ratio: 1:20<br>• All teachers are B.Ed. / M.Ed. qualified<br>• Regular training & development programs<br>• Dedicated counselor & support staff",
  },
  contact: {
    keywords: ["contact", "phone", "number", "address", "email", "location", "where", "call"],
    answer:
      "📞 <strong>Contact Us:</strong><br>• Address: Solapur, Maharashtra, India<br>• Phone: +91 88765 43210<br>• Email: info@greenvalleyschool.com<br>• Timings: Mon–Sat, 8:00 AM – 4:00 PM",
  },
  result: {
    keywords: ["result", "marks", "grade", "exam", "score", "report", "board"],
    answer:
      "📊 <strong>Results & Exams:</strong><br>• Unit tests: Monthly<br>• Term exams: 2 per year<br>• Final exams: March–April<br>• Results published within 7 days<br>• Parent-teacher meetings after each term<br>• Online result portal coming soon!",
  },
};

// ========================
// CHATBOT FUNCTIONS
// ========================
function getBotReply(text) {
  const t = text.toLowerCase();
  for (const key in faqs) {
    for (const kw of faqs[key].keywords) {
      if (t.includes(kw)) return faqs[key].answer;
    }
  }
  return "🤔 I'm not sure about that specific question. Please contact us at <strong>+91 88765 43210</strong> or email <strong>info@greenvalleyschool.com</strong> and we'll be happy to help!";
}

function toggleChatbot() {
  const win = document.getElementById("chatbotWindow");
  const badge = document.getElementById("chatBadge");
  const isOpen = win.style.display === "flex";
  win.style.display = isOpen ? "none" : "flex";
  if (!isOpen) {
    badge.style.display = "none";
    document.getElementById("chatInput").focus();
  }
}

function addMessage(text, type) {
  const msgs = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = "msg " + type;
  div.innerHTML = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function askQuestion(q) {
  addMessage(q, "user");
  document.getElementById("chatSuggestions").style.display = "none";
  setTimeout(() => {
    addMessage(getBotReply(q), "bot");
  }, 500);
}

function sendChat() {
  const input = document.getElementById("chatInput");
  const q = input.value.trim();
  if (!q) return;
  input.value = "";
  addMessage(q, "user");
  document.getElementById("chatSuggestions").style.display = "none";

  const typingDiv = document.createElement("div");
  typingDiv.className = "msg typing";
  typingDiv.id = "typingIndicator";
  typingDiv.textContent = "Typing...";
  document.getElementById("chatMessages").appendChild(typingDiv);
  document.getElementById("chatMessages").scrollTop = 9999;

  setTimeout(() => {
    const t = document.getElementById("typingIndicator");
    if (t) t.remove();
    addMessage(getBotReply(q), "bot");
  }, 700);
}