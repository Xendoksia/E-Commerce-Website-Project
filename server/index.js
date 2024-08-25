const express = require("express");
const cors = require("cors");
const app = express();
const { sql, poolPromise } = require("./lib/db.js");

app.use(express.json());
app.use(cors());

app.get("/api/recent", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM Products");
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

app.get("/api/product/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("ProductId", sql.Int, productId)
      .query("SELECT * FROM Products WHERE ID = @ProductId");
    res.json(result.recordset[0]); // Return the first matching product
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

app.listen("3000", () => {
  console.log("Server is Running");
});
