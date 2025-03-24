// Task 1: Set Up the Project Structure
	//Set up the basic HTML structure in the HTML file

// Task 2: Fetch products using .then() 
function fetchProductsThen() {
  // GET request to the API using fetch and handle with .then()
  fetch("https://www.course-api.com/javascript-store-products")
    .then((response) => {
      // Convert response to JSON
      return response.json();
    })
    .then((products) => {
      // Log name of each product to the console
      products.forEach(product => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      // Log errors that occur during the fetch
      console.error("Error fetching with .then():", error);
    });
}

// Task 3: Fetch Products with async/await
async function fetchProductsAsync() {
  try {
    // Await fetch response from the API
    const response = await fetch("https://www.course-api.com/javascript-store-products");

    // Convert response to JSON
    const products = await response.json();

    // Call a function to display the fetched products in the DOM
    displayProducts(products);
  } catch (error) {
    // If error occurs, pass it to the error handler function
    handleError(error);
  }
}

// Task 4: Display the Products
function displayProducts(products) {
  // Select container where products will be displayed
  const container = document.getElementById("product-container");

  // Clear container in case there is already content
  container.innerHTML = "";

  // Loop through the first 5 products only
  products.slice(0, 5).forEach(product => {
    // Destructure necessary fields from product object
    const { name, price, image } = product.fields;

    // Create wrapper div for each product
    const productDiv = document.createElement("div");
    productDiv.className = "product"; // Add CSS class

    // Create image element and set its attributes
    const img = document.createElement("img");
    img.src = image[0].url;
    img.alt = name;

    // Create a heading for product name
    const productName = document.createElement("h2");
    productName.textContent = name;

    // Create a paragraph for product price
    const productPrice = document.createElement("p");
    // Divide price by 100 to convert from cents to dollars
    productPrice.textContent = `$${(price / 100).toFixed(2)}`;

    // Append image, name, and price to the product div
    productDiv.appendChild(img);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);

    // Append the product card to the container
    container.appendChild(productDiv);
  });
}
