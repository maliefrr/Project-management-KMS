import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Success");
});

app.listen(PORT, console.log(`the server is running at http://localhost:${PORT}`));
