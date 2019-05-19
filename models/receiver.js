import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const reciverSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    address: String
})

const Receiver = mongoose.model('Receiver', reciverSchema);
module.exports = Receiver;