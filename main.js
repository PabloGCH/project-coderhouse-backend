const Container = require("./container.js");

let container = new Container("./products.json");

async function test() {
	//SAVE
	//let newid = await container.save({name: "product", price: 10});
	//console.log("ID del objeto agregado es: " + newid);
	//GET_ALL
	//console.log(await container.getAll())
	//GET_BY_ID
	//console.log(await container.getById(2));
	//DELETE_BY_ID
	//await container.deleteById(5);
	//DELETE_ALL
	//await container.deleteAll();
}
test();
