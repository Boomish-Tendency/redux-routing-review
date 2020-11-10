require("dotenv").config();
const express = require("express");
const massive = require("massive");
const prodCtrl = require("./productController");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
    console.log("db connected");
  })
  .catch((err) => console.log(err));

app.get("/api/products", prodCtrl.getAllProducts);
app.get("/api/products/:id", prodCtrl.getOneProduct);
app.post("/api/products", prodCtrl.addProduct);
app.put("/api/products/:id", prodCtrl.editProduct);
app.delete("/api/products/:id", prodCtrl.deleteProduct);

app.listen(SERVER_PORT, () => {
  console.log(`server listening on ${SERVER_PORT}`);
});
