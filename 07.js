const mongodb = require('mongodb');

const url = 'mongodb://localhost:27017/' + process.argv[2]; 
const collection = process.argv[3];
const id = process.argv[4];

const mongo = mongodb.MongoClient;
mongo.connect(url, function(err, db) {
  if (err) {
    console.error('Something went wrong: ', err); 
  } else {
    db
      .collection(collection)
      .remove({ _id: id }, (err, res) => {
        if (err) {
          console.error('Something went wrong: ', err); 
        }
      });
    db.close();
  }
});
