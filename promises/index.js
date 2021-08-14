// create node app to interact with MongoDB

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const dbOper = require("./operations");

const url = "mongodb://localhost:27017/";

const dbname = "conFusion";

MongoClient.connect(url).then((client) => {
	
	console.log("connection success");

	const db = client.db(dbname);
	
	dbOper.insertDocument(db, {"name": "sommit", "description": "some commit"}, "dishes")
	.then((result) => {
		console.log("insert Document:\n", result);
		
		return dbOper.findDocuments(db, "dishes");
	})
	.then((docs) => { 
		console.log("Found Documents:\n", docs);
	
		return dbOper.updateDocument(db, {"name": "sommit"}, {"description": "Update some commit"}, "dishes")
	})
	.then((result) => {
		console.log("Update document:\n", result);	
				
		return dbOper.findDocuments(db, "dishes");
	 }) 
	 .then((docs) => {
		console.log("Found Documents:\n", docs);	
				
		return db.dropCollection("dishes");
	})
	.then((result) => {
		console.log("Dropped Collection: ", result);						
						
		client.close();
		
	})
	.catch(console.dir); 
}).catch(console.dir);




