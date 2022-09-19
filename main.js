const Container = require("./container.js");

let container = new Container("./products.json");


container.readFile();
setTimeout(() =>  {
	//SAVE
	//container.save({name: "lapiz", price: 20});
	//GET_BY_ID
	//console.log(container.getById(1));
	//GET_ALL
	//console.log(container.getAll());
	//DELETE_BY_ID
	//container.deleteById(1);
	//DELETE_ALL
	//container.deleteAll();
}, 1000);
