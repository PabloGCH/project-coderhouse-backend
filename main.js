class User {
	constructor(name = "", lastname = "", pets = [], books = []) {
		this.name = name;
		this.lastname = lastname;
		this.pets = pets;
		this.books = books;
	}
	getFullName() {
		return this.name + " " + this.lastname;
	}
	addPet(pet) {
		this.pets.push(pet);
	}
	countPets() {
		return this.pets.length;
	}
	addBook(name, author) {
		this.books.push({
			name: name,
			author: author
		})
	}
	getBookNames() {
		return this.books.map(el => el.name);
	}
}


let user = new User("pablo", "choconi", ["ruby", "mimi"], [{name: "EL Horror de Insmouth", author: "H.P.Lovecraft"}]);

user.addPet("cati");
user.addBook("El Estudio en Escarlata","Arthur Conan Doyle")
console.log("Usuario: " + user.getFullName());
console.log("Numero de mascotas: " + user.countPets());
console.log("Libros leidos: ");
user.getBookNames().forEach(book => {
	console.log(book);
});


