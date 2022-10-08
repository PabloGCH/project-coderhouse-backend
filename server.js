//IMPORTS
const express = require("express")
//GLOBAL VARIABLES
const app = express()
const productsRouter = require("./routes/products")

//TOOLS
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/public", express.static("public"))

//ROUTES
app.use("/api/products", productsRouter);


//SERVER INIT
app.listen(4000, () => {
	console.log("Server listening on port 4000")
})

