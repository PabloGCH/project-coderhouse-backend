//Imports
const express = require("express")
const Container = require("./container.js")
//Global variables
const container = new Container("./products.json")
const app = express()


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/api/products", (req, res) => {
	container.getAll().then(data => {
		res.send(data);
	})
})

app.get("/api/products/:id", (req, res) => {
	let {id} = req.params;
	container.getById(id).then(data => {
		if(data) {
			res.send(data);
		} else {
			res.send({error: "Producto no encontrado"})
		}
	})
})


app.post("/api/products", (req, res) => {
	container.save(req.body).then(data => {
		res.send(data);
	})
})


app.put("/api/products/:id", (req,res) => {
	let {id} = req.params;
	container.edit(req.body, id).then(data => {
		if(data.success) {
			res.send("Producto modificado");
		} else {
			res.send("Error al modificar producto");
		}
	})
})


app.delete("/api/products/:id", (req, res) => {
	let {id} = req.params;
	container.deleteById(id).then(data => {
		if(data.success) {
			res.send("Producto eliminado");
		} else {
			res.send("Error al eliminar archivo");
		}
	}) 
})


app.listen(4000, () => {
	console.log("Server listening on port 4000")
})
