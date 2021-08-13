// create operations for db interactions 

const assert = require("assert");

exports.insertDocument = (db, document, collection, callback) => {
	const coll = db.collection(collection);
	
	coll.insert(document, (err, result) => {
		assert.equal(err, null);
		console.log("document inserted " + result.insertedCount + " into collection " + collection);
		callback(result);
	});
};


exports.findDocuments = (db, collection, callback) => {
	const coll = db.collection(collection);
	coll.find({}).toArray((err, docs) => {
		assert.equal(err, null);
		callback(docs);
	});

};

exports.removeDocument = (db, document, collection, callback) => {
	const coll = db.collection(collection);
	coll.deletOne(document, (err, result) =>  {
		assert.equal(err, null);
		console.log('remove document ', document);
		callback(result);
	});
};


exports.updateDocument = (db, document, update,  collection, callback) => {
	const coll = db.collection(collection);
	coll.updateOne(document, {$set: update}, null, (err, result) => {
		assert.equal(err, null);
		console.log("Update the document with ", update);
		callback(result);
	});
};






