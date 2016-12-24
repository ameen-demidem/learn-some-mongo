const mongodb = require('mongodb');

const url = 'mongodb://localhost:27017/learnyoumongo';
const firstName = process.argv[2] || 'Ameen';
const lastName = process.argv[3] || 'Demidem';

const mongo = mongodb.MongoClient;
mongo.connect(url, function(err, db) {
  if (err) {
    console.error('Something went wrong: ', err); 
  } else {
    db
      .collection('docs')
      .insert({ firstName, lastName }, (err, data) => {
        if (err) {
          console.error('Something went wrong: ', err); 
        } else {
          console.log(JSON.stringify(data.ops[0]));
        }
      });
    db.close();
  }
});
