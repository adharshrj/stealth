const mongoose = require('mongoose');
const movieRatingSchema = new mongoose.Schema({  
    MovieName: {type: String},
    Rating: {type: Number},
    Cast: {type: Array},
    Genre: {type: String},
    ReleaseDate: {type: Date}
 },
 {timestamps:true}
 );
module.exports = mongoose.model('MovieRating', movieRatingSchema);
