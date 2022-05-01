const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;
const mongouri = process.env["dburl"];

module.exports.connectToDatabase = () => {
  if (isConnected) {
    console.info('using existing database connection');
    return Promise.resolve();
  }

  console.info('using new database connection');
  return mongoose.connect(mongouri) 
    .then(db => { 
      isConnected = db.connections[0].readyState;
    });
};
