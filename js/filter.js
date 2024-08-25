products = [];

// DOM Yüklenmiş olduğunda ürünleri çek
document.addEventListener("DOMContentLoaded", function () {
  fetchProductsFromAPI();

  const priceBar = document.getElementById("priceBar");
  const priceValue = document.getElementById("price-value");

  // Slider değerini güncelle
  priceBar.addEventListener("input", function () {
    const maxPrice = parseFloat(priceBar.value);
    priceValue.textContent = maxPrice;
    updateProductDisplay(maxPrice);
  });
});

// Ürünleri API'den çek
function fetchProductsFromAPI() {
  fetch("http://localhost:3000/api/recent")
    .then((response) => response.json())
    .then((data) => {
      products = data; // Assuming the response is an array of products
      const maxPrice = parseFloat(document.getElementById("priceBar").value);
      updateProductDisplay(maxPrice);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}

function updateProductDisplay(maxPrice) {
  const filteredProducts = products.filter((product) => {
    const price = parseFloat(product.ListPrice);
    return price <= maxPrice;
  });

  // Güncellenmiş ürünleri ana listeye ve önerilere ekle
  updateProductList(filteredProducts);
  displayRandomSuggestions(filteredProducts);
}

function displayRandomSuggestions(productsToDisplay) {
  const shuffledProducts = shuffleArray(productsToDisplay);
  const currentProducts = shuffledProducts.slice(0, productsPerPage);
  const productList = document.getElementById("productsugg");
  productList.innerHTML = "";
  currentProducts.forEach((product) => {
    const originalPrice = product.ListPrice;

    const productContainer = document.createElement("div");
    productContainer.className = "productspecial-container";

    productContainer.innerHTML = `
            <span class="productimg"><img src="${product.ImagePath}" alt="Product Image" /></span>
            <span class="productname">${product.ProductName}</span>
            <span class="productdescription">${product.ProductDescription}</span>
            <span class="productprice">${originalPrice}$</span>
          `;

    productList.appendChild(productContainer);
  });

  truncateProductDescriptions();
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
