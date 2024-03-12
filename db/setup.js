const pool = require("./connection");

let dropTable = `drop table if exists "Categories","Shoes";`;

let queryTableCategories = `CREATE TABLE IF NOT EXISTS "Categories" (
    id SERIAL PRIMARY KEY,
    "name" VARCHAR NOT null);`;

let queryTableShoes = `CREATE TABLE IF NOT EXISTS "Shoes" (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    "categoryId" INT REFERENCES "Categories" (id) NOT NULL,
    "minSize" INTEGER,
    "maxSize" INTEGER,
    "status" VARCHAR NOT NULL
);`;


async function migration() {
	try {
		let drop = await pool.query(dropTable);
		if (drop) {
			console.log(`drop table success`);
		}
		let queryCategories = await pool.query(queryTableCategories);
		if (queryCategories) {
			console.log(`Create table Categories success`);
		}
		let queryShoes = await pool.query(queryTableShoes);
		if (queryShoes) {
			console.log(`Create table Shoes success`);
		}
	} catch (error) {
		console.log(error);
	}
}

migration();
