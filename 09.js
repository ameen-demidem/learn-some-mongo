const mongodb = require('mongodb');

const url = 'mongodb://localhost:27017/learnyoumongo';
const collection = 'prices';
const size = process.argv[2];

const mongo = mongodb.MongoClient;
mongo.connect(url, function(err, db) {
  if (err) {
    console.error('Something went wrong: ', err); 
  } else {
    db
      .collection(collection)
      .aggregate([
        { $match: { size: size } },
        { $group: {
          _id: 'avg',
          avg: { $avg: '$price' }
        }}
      ])
      .toArray((err, result) => {
        if (err) {
          console.error('Something went wrong: ', err); 
        } else {
          console.log(result[0].avg.toFixed(2));
        }
      });
    db.close();
  }
});
