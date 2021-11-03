import express from "express";
import router from "./routes/router.js";
import expressLayouts from "express-ejs-layouts";
import connectDb from "./config/db.js";

const app = express();

// setting template engine
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));

// database connection
connectDb();

// middleware
app.use(express.urlencoded({ extended: false }));

// load route file
app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`the server is running at http://localhost:${PORT}`));
