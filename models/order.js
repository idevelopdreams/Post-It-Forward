import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = Schema({
    _id: Schema.Types.ObjectId,
    // one to one relationships
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    charity: { type: mongoose.Schema.Types.ObjectId, ref: 'Charity' },
    card: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    reciver: { type: mongoose.Schema.Types.ObjectId, ref: 'Receiver' }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;