// Mock database (represents MongoDB)
let menu = [
  { name: "Burger", price: 50, available: true },
  { name: "Pizza", price: 120, available: true },
  { name: "Tea", price: 10, available: false }
];

// Simulates GET /api/menu
function loadMenu() {
  const menuDiv = document.getElementById("menu");
  menuDiv.innerHTML = "";

  menu.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: ₹${item.price}</p>
      <p class="${item.available ? 'available' : 'not-available'}">
        ${item.available ? 'Available' : 'Not Available'}
      </p>
    `;

    menuDiv.appendChild(div);
  });
}

// Simulates POST /api/menu
document.getElementById("addForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const available = document.getElementById("available").value === "true";

  menu.push({ name, price, available });
  loadMenu();

  this.reset();
});

// Load menu on page load
loadMenu();
