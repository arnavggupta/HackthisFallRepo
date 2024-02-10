// server.js
import express from "express";

import dbConnection from "./db/conn.js";

import user from "./models/user.model.js";

import  router from "./routes/user.routes.js";

import cookieParser from "cookie-parser"
const app = express();

const port = process.env.PORT || 3000;
app.use("/api",router)
app.use(express.json());
app.use(cookieParser());

dbConnection.on("error", (err) => {
  console.error("MongoDB Connection Error:", err);
});

dbConnection.once("open", () => {
  console.log("MongoDB Connection Established");
});

app.listen(port, () => {
  console.log(`Server is started at ${port}`);
});
