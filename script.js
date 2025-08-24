// Toast notification
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// Copy link action
document.querySelectorAll(".link-card").forEach(link => {
  link.addEventListener("click", (e) => {
    const action = link.querySelector(".link-action i");
    if (action) {
      // animasi klik
      action.style.color = "#fff";
      setTimeout(() => {
        action.style.color = "#94a3b8";
      }, 500);

      showToast("Membuka link...");
    }
  });
});
