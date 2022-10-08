const express = require("express");
const router = express.Router();
const Container = require("../container.js")
const container = new Container("./products.json")


router.get("/", (req, res) => {
	container.getAll().then(data => {
		res.send(data);
	})
})

router.get("/:id", (req, res) => {
	let {id} = req.params;
	container.getById(id).then(data => {
		if(data) {
			res.send(data);
		} else {
			res.send({error: "Producto no encontrado"})
		}
	})
})


router.post("/", (req, res) => {
	container.save(req.body).then(data => {
		res.send(data);
	})
})


router.put("/:id", (req,res) => {
	let {id} = req.params;
	container.edit(req.body, id).then(data => {
		res.send(data);
	})
})


router.delete("/:id", (req, res) => {
	let {id} = req.params;
	container.deleteById(id).then(data => {
		if(data.success) {
			res.send("Producto eliminado");
		} else {
			res.send("Error al eliminar archivo");
		}
	}) 
})

module.exports = router;
