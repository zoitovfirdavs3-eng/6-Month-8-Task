require("dotenv").config();
const express = require("express");
const { dbConnection } = require("./lib/db.service");
const mainRoutes = require("./router/main.routes");

const app = express();
app.use(express.json());

app.use("/api", mainRoutes);

const PORT = process.env.PORT || 3000;

dbConnection().then(() => {
  app.listen(PORT, () => console.log(`Server is running on ${PORT}-port`));
}).catch((err: any) => {
  console.error("Failed to start server:", err);
});