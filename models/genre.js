const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
	name: { type: String, required: true, maxlength: 100, minlength: 3 },
});

GenreSchema.virtual('url').get(() => {
	return '/genres/' + this._id;
});

module.exports = new mongoose.model('Genre', GenreSchema);
