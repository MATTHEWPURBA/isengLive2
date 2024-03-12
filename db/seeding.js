const pool = require("./connection");

let dataCategories = require("../data/categories.json", "utf-8")
	.map((perCategory) => {
		return `('${perCategory.name}')`;
	})
	.join(",\n");

let dataShoes = require("../data/shoes.json", "utf-8")
	.map((perShoe) => {
		return `('${perShoe.name}',${perShoe.categoryId},${perShoe.minSize},${perShoe.maxSize},'${perShoe.status}')`;
	})
	.join(",\n");

let queryCategories = `insert into "Categories"("name")
values ${dataCategories}`;

let queryShoes = `insert into "Shoes"("name","categoryId","minSize","maxSize","status")
values ${dataShoes}`;

async function seed() {
	try {
		let seedCategories = await pool.query(queryCategories);
		if (seedCategories) {
			console.log(`seeding Author Berhasil`);
		}
		let seedShoes = await pool.query(queryShoes);
		if (seedShoes) {
			console.log(`seeding Post Berhasil`);
		}
	} catch (error) {
		console.log(error);
	}
}

seed();
