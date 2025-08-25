// Toast Notification
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = "show";
  setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

// Prevent default "#" link
document.querySelectorAll("a[href='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    showToast("⚠️ Fitur ini masih dalam pengembangan!");
  });
});
