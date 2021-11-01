import express from "express";
import router from "./routes/router.js";

const app = express();

app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`the server is running at http://localhost:${PORT}`));
