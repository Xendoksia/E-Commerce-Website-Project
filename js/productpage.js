document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    fetchProductDetails(productId);
  } else {
    console.error("Product ID not found in URL.");
  }
});

function fetchProductDetails(productId) {
  fetch(`http://localhost:3000/api/product/${productId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((product) => {
      displayProductDetails(product);
    })
    .catch((error) => {
      console.error("Error fetching product details:", error);
    });
}

function displayProductDetails(product) {
  const productDetailContainer = document.getElementById("product-detail");
  const productdescription = document.getElementById("product-description");
  const productname = document.getElementById("product-name");
  const productprice = document.getElementById("product-price");
  const productImagePath = document.querySelector(".ImgProduct");

  if (product) {
    productdescription.innerHTML = product.ProductDescription;
    productname.innerHTML = product.ProductName;
    productprice.innerHTML = `${product.ListPrice}$`;
    productImagePath.innerHTML = "";

    const imgElement = document.createElement("img");
    imgElement.src = product.ImagePath;
    imgElement.alt = product.ProductName;

    productImagePath.appendChild(imgElement);
  } else {
    productDetailContainer.innerHTML = `<p>Product not found.</p>`;
  }
}
