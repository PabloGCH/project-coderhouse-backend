const fs = require('fs');

class Container {
	constructor(fileDir) {
		this.fileDir = fileDir;
		this.currentFile = {};
	}

	async readFile() {
		try {
			this.currentFile = JSON.parse(await fs.promises.readFile(this.fileDir, "utf-8"));
		}
		catch {
			console.log("Failed to load file, creating new one");
			this.currentFile = {
				lastId: 0,
				products: []
			};
			this.writeFile();
		}
	}
	async writeFile() {
		try {
			await fs.promises.writeFile(this.fileDir, JSON.stringify(this.currentFile, null, "	"));
		}
		catch {
			console.log("Failed to write file")
		}
	}
	async save(object) {
		try {
			this.currentFile.lastId++;
			let newObject = {
				id: this.currentFile.lastId,
				...object
			};
			this.currentFile.products.push(newObject);
			this.writeFile();
			return this.currentFile.lastId;
		}
		catch {
			console.log("Failed to save object")
		}
	}
	async getById(id) {
		try {
			return this.currentFile.products.find(product => product.id == id) || null;
		}
		catch {
			console.log("Failed to try to find object")
		}
	}
	async getAll() {
		try {
			return this.currentFile.products;
		}
		catch {
			console.log("Failed to try to get object")
		}
	}
	async deleteById(id) {
		try {
			let index = this.currentFile.products.findIndex(product => product.id == id);
			if(index == -1) {
				console.log("El producto no existe");
			} else {
				console.log("El product fue eliminado");
				this.currentFile.products.splice(index, 1)
				this.writeFile();
			}
		}
		catch {
			console.log("Failed to try to delete object");
		}
	}
	async deleteAll() {
		try {
			this.currentFile.lastId = 0;
			this.currentFile.products = [];
			this.writeFile();
		}
		catch {
			console.log("Failed to delete objects");
		}
	}
}

module.exports = Container;
