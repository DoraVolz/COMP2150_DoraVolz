var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date}
});

AuthorSchema
    .virtual('name')
    .get(function() {
        return this.first_name + ', ' + this.family_name;
});

AuthorSchema
    .virtual('url')
    .get(function() {
        return 'catalog/author/' + this._id;
});

AuthorSchema
    .virtual('due_back_formatted')
    .get(function () {
        return this.date_of_birth ? moment(this.date_of_birth).format('YYYY-MM-DD') : '';
});

// Export this model
module.exports = mongoose.model('Author', AuthorSchema);

