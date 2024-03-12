const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extend: true })); // req.body

app.use(require("./routers"));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
