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

