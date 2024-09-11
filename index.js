const express = require("express");
const transaction = require("./dataSources/transaction");
const userInfo = require("./dataSources/userInfo");

const app = express();
const port = process.env.PORT || 4000;

function GetNCheck(req, res) {
  const count = parseInt(req.query.count) || 10; 
  const data = [];

  // Populate data with results from the transaction function
  for (let i = 0; i < count; i++) {
    data.push(transaction()); // Assuming transaction() returns a value
  }

  // Handle potential errors from transaction() more gracefully
  try {
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error generating transactions:", error);
    return res.status(500).json("Internal Server Error");
  }
}

app.get("/test", GetNCheck);
app.get("/users", GetNCheck);
app.listen(port, () => {
  console.log(`API server running at port ${port}`);
});
