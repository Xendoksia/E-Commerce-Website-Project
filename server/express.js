app.get("/api/product/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("id", sql.Int, productId)
      .query("SELECT * FROM Products WHERE ID = @id");

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});
