//Imports
const express = require("express")
const Container = require("./container.js")
//Global variables
const container = new Container("./products.json")
const app = express()

app.get("/productos", (req, res) => {
	container.getAll().then(data => {
		res.send(data);
	})
})

app.get("/productoRandom", (req, res) => {
	container.randomProduct().then(data => {
		res.send(data);
	})
})



app.listen(4000, () => {
	console.log("Server listening on port 4000")
})
