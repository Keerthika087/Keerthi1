document.addEventListener("DOMContentLoaded", () => {
    // Select all "Add to Cart" buttons and their respective controls
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    const quantityControls = document.querySelectorAll(".quantity-controls");

    addToCartButtons.forEach((addToCartBtn, index) => {
        const controls = quantityControls[index]; // Get the corresponding quantity controls
        const decreaseBtn = controls.querySelector(".decrease-btn");
        const increaseBtn = controls.querySelector(".increase-btn");
        const cartQuantity = controls.querySelector(".cart-quantity");
        let quantity = 1;

        // Handle "Add to Cart" button click
        addToCartBtn.addEventListener("click", () => {
            addToCartBtn.style.display = "none"; // Hide "Add to Cart" button
            controls.style.display = "flex"; // Show quantity controls
        });

        // Increase Quantity
        increaseBtn.addEventListener("click", () => {
            quantity++;
            cartQuantity.textContent = quantity;
        });

        // Decrease Quantity
        decreaseBtn.addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                cartQuantity.textContent = quantity;
            } else {
                // Hide quantity controls and show "Add to Cart" button
                controls.style.display = "none";
                addToCartBtn.style.display = "inline-block";
                quantity = 1; // Reset quantity to 1
            }
        });
    });
});


// nav profile
function navigateTo(url) {
    window.location.href = url;
  }

  function toggleDropdown() {
    const dropdown = document.getElementById("profileDropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }

  // Optional: Close dropdown if clicked outside
  window.addEventListener("click", function (e) {
    const profileIcon = document.getElementById("profile");
    const dropdown = document.getElementById("profileDropdown");
    if (!profileIcon.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });