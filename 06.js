const mongodb = require('mongodb');

const url = 'mongodb://localhost:27017/' + process.argv[2]; 

const mongo = mongodb.MongoClient;
mongo.connect(url, function(err, db) {
  if (err) {
    console.error('Something went wrong: ', err); 
  } else {
    db
      .collection('users')
      .update(
        { username: 'tinatime' },
        { $set: { age: 40 } },
        (err, res) => {
          if (err) {
            console.error('Something went wrong: ', err); 
          }
        }
      );
    db.close();
  }
});
