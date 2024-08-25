let products = []; // Define products globally

function fetchProductsFromAPI() {
  fetch("http://localhost:3000/api/recent")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      products = data; // Store the products
      displayRandomSuggestions(); // Display suggestions after fetching
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function truncateProductDescriptions() {
  const maxLength = 40;
  const descriptions = document.querySelectorAll(".productdescription");

  descriptions.forEach((desc) => {
    const fullText = desc.textContent;
    if (fullText.length > maxLength) {
      desc.textContent = fullText.slice(0, maxLength) + "...";
      desc.setAttribute("data-fulltext", fullText);
    } else {
      desc.setAttribute("data-fulltext", fullText);
    }
  });
}

function displayRandomSuggestions() {
  if (products.length === 0) {
    console.warn("No products available for suggestions.");
    return;
  }

  const shuffledProducts = shuffleArray(products);
  const currentProducts = shuffledProducts.slice(0, 5); // Display 5 random products
  const productList = document.getElementById("productsugg");
  productList.innerHTML = "";

  currentProducts.forEach((product) => {
    const productLink = document.createElement("a");
    productLink.href = `product-detail.html?id=${product.ID}`;

    const productContainer = document.createElement("div");
    productContainer.className = "product-container";

    productContainer.innerHTML = `
        <span class="productimg"><img src="${product.ImagePath}" alt="Product Image" /></span>
        <span class="productname">${product.ProductName}</span>
        <span class="productdescription">${product.ProductDescription}</span>
        <span class="productprice">${product.ListPrice}$</span>
      `;

    productLink.appendChild(productContainer);
    productList.appendChild(productLink);
  });

  truncateProductDescriptions();
}
// Call this function to fetch and display products
fetchProductsFromAPI();
