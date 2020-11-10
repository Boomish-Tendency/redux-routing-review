module.exports = {
  getAllProducts: (req, res) => {
    const db = req.app.get("db");
    db.get_all_products()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));
  },
  getOneProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.get_product(+id)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));
  },
  addProduct: (req, res) => {
    const db = req.app.get("db");
    const { body } = req;
    db.add_product(body)
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  },
  editProduct: (req, res) => {
    const db = req.app.get("db");
    const { body } = req;
    const { id } = req.params;
    db.edit_product({ ...body, id })
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  },
  deleteProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_product(+id)
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  },
};
