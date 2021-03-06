const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://admin:admin@cluster0-ekg57.mongodb.net/admin';

// Database Name
const dbName = 'FoodSource';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

//   findDocuments(db, function(){
//        client.close();
//   });
    findFood(db, function(){
        client.close();
    })

 
});

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('Location');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
      callback(docs);
    });
}
const findFood = function(db, callback){
    const collection = db.collection('Location');

    collection.find({
        food: /lettuce/i
    }).limit(5).toArray(function(err, docs){
        if(err) throw err;

        console.log(docs);
    });
}

  

