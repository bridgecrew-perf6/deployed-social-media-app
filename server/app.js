import express from "express";
import cors from "cors";
import "dotenv/config";
import "./config/db.js";
import userRoute from "./routes/user.js";
import postRoute from "./routes/post.js";

// app config
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

app.use(userRoute);
app.use(postRoute);

// api routes
// app.get("/", (req, res) => {
//   res.send("hello guys");
// });

import path from "path";
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// listen
app.listen(port, (req, res) => {
  console.log(`server is running at ${port}`);
});
