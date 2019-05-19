import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cardSchema = Schema({
    _id: Schema.Types.ObjectId,
    category: String,
    text: String,
    design:{
        type: String,
        unique: true
    }
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;