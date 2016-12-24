const mongodb = require('mongodb');

const url = 'mongodb://localhost:27017/learnyoumongo';
const ageThreshold = Number(process.argv[2]) || 0;

const mongo = mongodb.MongoClient;
mongo.connect(url, function(err, db) {
  if (err) {
    console.error('Something went wrong: ', err); 
  } else {
    db
      .collection('parrots')
      .find(
        { age: { $gt: ageThreshold } },
        { name: 1, age: 1, _id: 0 }
      )
      .toArray((err, parrots) => {
        if (err) {
          console.error('Something went wrong: ', err); 
        } else {
          console.log(parrots);
        }
      });
    db.close();
  }
});
