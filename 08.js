const mongodb = require('mongodb');

const url = 'mongodb://localhost:27017/learnyoumongo';
const collection = 'parrots';
const ageThreshold = Number(process.argv[2]);

const mongo = mongodb.MongoClient;
mongo.connect(url, function(err, db) {
  if (err) {
    console.error('Something went wrong: ', err); 
  } else {
    db
      .collection(collection)
      .count({ age: { $gt: ageThreshold } }, (err, count) => {
        if (err) {
          console.error('Something went wrong: ', err); 
        } else {
          console.log(count);
        }
      });
    db.close();
  }
});
