const products = require("../products.json");

// const getProduct = (req, res) => {
//   const item = products.find(val => val.id === parseInt(req.params.id));
//   if (!item) {
//     return res.status(500).send("Item not in list");
//   }
//   module.exports = getProduct;

const getProducts = (req, res, next) => {
  if (req.query.price) {
    const items = products.filter(
      val => val.price >= parseInt(req.query.price)
    );
    return res.status(200).send(items);
  }

  res.status(200).send(products);
};

module.exports = getProducts;
