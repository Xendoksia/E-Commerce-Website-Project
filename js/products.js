const productsPerPage = 15;
const productsPerRow = 5; // Number of products per row
const rowsHeight = {
  2: "60em",
  3: "88em",
};

let currentPage = 1;
let products = [];

document.addEventListener("DOMContentLoaded", function () {
  fetchProductsFromAPI();
  const priceBar = document.getElementById("priceBar");
  const priceValue = document.getElementById("price-value");
  const filterButton = document.getElementById("filter-button");
  const brandFilter = document.getElementById("brandFilter");

  priceBar.addEventListener("input", function () {
    const maxPrice = parseFloat(priceBar.value);
    priceValue.textContent = maxPrice;
  });

  if (filterButton) {
    filterButton.addEventListener("click", function () {
      const maxPrice = parseFloat(priceBar.value);
      const selectedBrand = brandFilter.value;

      currentPage = 1;

      updateProductList(maxPrice, selectedBrand);
      updatePagination(filteredProducts.length);
    });
  }

  const prevPageButton = document.getElementById("prev-page");
  const nextPageButton = document.getElementById("next-page");

  if (prevPageButton && nextPageButton) {
    prevPageButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        const maxPrice = parseFloat(priceBar.value);
        const selectedBrand = brandFilter.value;
        updateProductList(maxPrice, selectedBrand);
        scrollToTop();
      }
    });

    nextPageButton.addEventListener("click", () => {
      const maxPrice = parseFloat(priceBar.value);
      const selectedBrand = brandFilter.value;
      const filteredProducts = products.filter(
        (product) =>
          product.Category === "Computers" &&
          product.ListPrice <= maxPrice &&
          (!selectedBrand || product.BrandName === selectedBrand)
      );
      const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        updateProductList(maxPrice, selectedBrand);
        scrollToTop();
      }
    });
  } else {
    console.error("Pagination buttons not found.");
  }
});

function fetchProductsFromAPI() {
  fetch("http://localhost:3000/api/recent")
    .then((response) => response.json())
    .then((data) => {
      products = data;
      const maxPrice = parseFloat(document.getElementById("priceBar").value);
      const selectedBrand = document.getElementById("brandFilter").value;
      updateProductList(maxPrice, selectedBrand);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}

function updateProductList(maxPrice, selectedBrand) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  let filteredProducts = products.filter(
    (product) =>
      product.Category === "Computers" &&
      product.ListPrice <= maxPrice &&
      (!selectedBrand || product.BrandName === selectedBrand)
  );

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const currentProducts = filteredProducts.slice(start, end);

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

  updatePagination(filteredProducts.length);
  truncateProductDescriptions();
  adjustCategoryContainerHeight(currentProducts.length);
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

function updatePagination(totalProducts) {
  const pageInfo = document.getElementById("page-info");
  const prevPageButton = document.getElementById("prev-page");
  const nextPageButton = document.getElementById("next-page");

  if (pageInfo && prevPageButton && nextPageButton) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages;
  } else {
    console.error("Pagination elements not found.");
  }
}

function adjustCategoryContainerHeight(numProducts) {
  const categoryContainer = document.getElementById("product-list");

  if (categoryContainer) {
    const numRows = Math.ceil(numProducts / productsPerRow);
    const height = rowsHeight[numRows] || "60em";

    categoryContainer.style.height = height;
  } else {
    console.error("Category Container not found.");
  }
}

function scrollToTop() {
  const scrollId = document.getElementById("NavB");
  if (scrollId) {
    scrollId.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error("Scroll target element not found.");
  }
}

function displayRandomProducts() {
  const shuffledProducts = shuffleArray(products);
  const currentProducts = shuffledProducts.slice(0, productsPerPage);
  const productList = document.getElementById("productsugg");
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

    productList.appendChild(productContainer);
  });

  truncateProductDescriptions();
}
