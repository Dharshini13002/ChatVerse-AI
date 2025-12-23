const themeSelect = document.getElementById("themeSelect");
const characterSelect = document.getElementById("characterSelect");
const characterName = document.getElementById("characterName");
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

/* Load saved theme */
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.className = savedTheme;
    themeSelect.value = savedTheme;
  }
};

/* Theme change */
themeSelect.addEventListener("change", () => {
  document.body.className = themeSelect.value;
  localStorage.setItem("theme", themeSelect.value);
});

/* Character change */
characterSelect.addEventListener("change", () => {
  const name = characterSelect.options[characterSelect.selectedIndex].text;
  characterName.textContent = name;

  const theme = "theme-" + characterSelect.value;
  document.body.className = theme;
  themeSelect.value = theme;
  localStorage.setItem("theme", theme);
});

/* Send message */
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    addMessage("AI Response → " + text, "ai");
  }, 600);
}

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = `message ${type}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

/* Settings modal */
function openSettings() {
  document.getElementById("settingsModal").classList.remove("hidden");
}

function closeSettings() {
  document.getElementById("settingsModal").classList.add("hidden");
}
