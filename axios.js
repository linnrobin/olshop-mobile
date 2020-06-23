const axios = require("axios");
function getProducts() {
  axios
    .get("http://localhost:3000/products")
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}

getProducts();
