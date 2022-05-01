const { connectToDatabase } = require('./dbConnect')
const chatStatus = require('../schema/mongoSchema');

module.exports.createRating = (event) => {
  return connectToDatabase()
    .then(() => {
      chatStatus.create(event)
        .then((res) => {
          console.debug(event, 'Rating posted succesfully')
          return {
            statusCode: 200,
            body: JSON.stringify(res)
          }
        })
        .catch((err) => {
          console.error({ api: "/rating", statusMsg: "Error occurred while posting rating", event, error: err.stack });
          return {
            statusCode: 500,
            body: 'Error occurred while posting rating'
          }
        });
    });
};

module.exports.updateRating = (filter, event) => {
  return connectToDatabase()
    .then(() => {
      chatStatus.findOneAndUpdate(filter, event, { new: true })
        .then(() => {
          console.debug(event, 'Rating updated succesfully')
          return {
            statusCode: 200,
            body: 'Rating updated Successfully'
          }
        })
        .catch((err) => {
          console.error({ api: "/rating", statusMsg: "Error occurred while updating rating", event, error: err.stack });
          return {
            statusCode: 500,
            body: 'Error occurred while updating rating'
          }
        });
    });
};

module.exports.deleteRating = (filter, event) => {
  return connectToDatabase()
    .then(() => {
      chatStatus.findOneAndDelete(filter, event, { new: true })
        .then(() => {
          console.debug(event, 'Rating deleted succesfully')
          return {
            statusCode: 200,
            body: 'Rating deleted Successfully'
          }
        })
        .catch((err) => {
          console.error({ api: "/rating", statusMsg: "Error occurred while deleting rating", event, error: err.stack });
          return {
            statusCode: 500,
            body: 'Error occurred while deleting rating'
          }
        });
    });
};
