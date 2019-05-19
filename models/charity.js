import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const charitySchema = Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        unique: true
    },
    desc: String,
    tags: String,
    token: String
})

const Charity = mongoose.model('Charity', charitySchema);
module.exports = Charity;