// Add-to-cart animation & toast
document.querySelectorAll('.add').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;

    btn.textContent = "Added!";
    setTimeout(() => btn.textContent = "Add Item", 1200);

    // Toast
    const t = document.createElement("div");
    t.textContent = `${name} added to cart`;
    t.style.position = "fixed";
    t.style.right = "20px";
    t.style.bottom = "20px";
    t.style.background = "#27483a";
    t.style.color = "#fff";
    t.style.padding = "10px 14px";
    t.style.borderRadius = "8px";
    t.style.fontWeight = "700";
    t.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    document.body.appendChild(t);

    setTimeout(() => {
      t.style.opacity = "0";
      t.style.transition = "0.4s";
    }, 900);

    setTimeout(() => t.remove(), 1400);
  });
});


