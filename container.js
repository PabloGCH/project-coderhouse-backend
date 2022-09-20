const fs = require('fs');

class Container {
	constructor(fileDir) {
		this.fileDir = fileDir;
	}

	async readFile() {
		try {
			return JSON.parse(await fs.promises.readFile(this.fileDir, "utf-8"));
		}
		catch {
			console.log("Failed to load file, creating new one");
			let file = {
				lastId: 0,
				products: []
			};
			this.writeFile(file);
		}
	}
	async writeFile(file) {
		try {
			await fs.promises.writeFile(this.fileDir, JSON.stringify(file, null, "	"));
		}
		catch {
			console.log("Failed to write file")
		}
	}
	async save(object) {
		try {
			let file = await this.readFile();
			file.lastId++;
			let newObject = {
				id: file.lastId,
				...object
			};
			file.products.push(newObject);
			this.writeFile(file);
			return file.lastId;
		}
		catch {
			console.log("Failed to save object")
		}
	}
	async getById(id) {
		try {
			let file = await this.readFile();
			return file.products.find(product => product.id == id) || null;
		}
		catch {
			console.log("Failed to find object")
		}
	}
	async getAll() {
		try {
			let file = await this.readFile();
			return file.products;
		}
		catch {
			console.log("Failed to get objects")
		}
	}
	async deleteById(id) {
		try {
			let file = await this.readFile();
			let index = file.products.findIndex(product => product.id == id);
			if(index == -1) {
				console.log("El producto no existe");
			} else {
				console.log("El producto fue eliminado");
				file.products.splice(index, 1)
				this.writeFile(file);
			}
		}
		catch {
			console.log("Failed delete object");
		}
	}
	async deleteAll() {
		try {
			let file = {
				lastId: 0,
				products: []
			};
			this.writeFile(file);
		}
		catch {
			console.log("Failed to delete objects");
		}
	}
}

module.exports = Container;
