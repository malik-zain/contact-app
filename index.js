import express from "express";
const app = express();
import contactRoutes from "./Routes/contact.routes.js";
import Contact from "./models/contacts.models.js";
import { Connectdb } from "./config/database.js";
Connectdb.connect();

//port
const port = process.env.PORT || 3000;

// Middleware
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Public"));
app.use("/", contactRoutes);



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});






console.log("Hello from GitHub push test!");
