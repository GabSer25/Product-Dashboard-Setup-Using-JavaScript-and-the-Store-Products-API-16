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

