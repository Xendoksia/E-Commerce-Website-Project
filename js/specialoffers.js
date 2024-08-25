let products = [];
const productsPerPage = 5;

function fetchProductsFromAPI() {
  fetch("http://localhost:3000/api/recent")
    .then((response) => response.json())
    .then((data) => {
      products = data;
      displayRandomProducts();
      displayRandomSuggestions();
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}

function displayRandomProducts() {
  const shuffledProducts = shuffleArray(products);
  const currentProducts = shuffledProducts.slice(0, productsPerPage);
  const productList = document.getElementById("productspecial");
  productList.innerHTML = "";
  currentProducts.forEach((product) => {
    const originalPrice = product.ListPrice;
    const discountedPrice = (originalPrice * 0.9).toFixed(2);
    const productLink = document.createElement("a");
    productLink.href = `product-detail.html?id=${product.ID}`;
    const productContainer = document.createElement("div");
    productContainer.className = "productspecial-container";

    productContainer.innerHTML = `
          <span class="productimg"><img src="${product.ImagePath}" alt="Product Image" /></span>
          <span class="productname">${product.ProductName}</span>
          <span class="productdescription">${product.ProductDescription}</span>
          <span class="productoldprice">${originalPrice}$</span>
          <span class="productprice">${discountedPrice}$</span>
        `;

    productLink.appendChild(productContainer);
    productList.appendChild(productLink);
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

document.addEventListener("DOMContentLoaded", function () {
  fetchProductsFromAPI();
});

function displayRandomSuggestions() {
  const shuffledProducts = shuffleArray(products);
  const currentProducts = shuffledProducts.slice(0, productsPerPage);
  const productList = document.getElementById("productsugg");
  productList.innerHTML = "";

  currentProducts.forEach((product) => {
    const productLink = document.createElement("a");
    productLink.href = `product-detail.html?id=${product.ID}`;
    const productContainer = document.createElement("div");
    productContainer.className = "productspecial-container";

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
