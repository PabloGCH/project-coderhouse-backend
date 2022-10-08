//Imports
const express = require("express")
//Global variables
const app = express()
const productsRouter = require("./routes/products")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/products", productsRouter);

app.listen(4000, () => {
	console.log("Server listening on port 4000")
})

