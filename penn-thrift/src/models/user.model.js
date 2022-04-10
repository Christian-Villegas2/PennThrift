const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 25,
    },
    password: {
        type: String,
        required: true,
        minLength: 1,
    },
    email: {
        type: String,
        required: true,
    },
    venmo: {
        type: String,
        minLength: 5,
        maxLength: 16,
    },
    location: String,
    items: [{type: Schema.Types.ObjectId, ref: 'Item'}],
    reviews_for: [{type: Schema.Types.ObjectId, ref: 'Review'}],
    reviews_to: [{type: Schema.Types.ObjectId, ref: 'Review'}],
    requests_for: [{type: Schema.Types.ObjectId, ref: 'Request'}],
    requests_to: [{type: Schema.Types.ObjectId, ref: 'Request'}],
    chats: [{type: Schema.Types.ObjectId, ref: 'Chat'}],
    pending_notifs: [{type: Schema.Types.ObjectId, ref: 'Notification'}],
}, { collection: 'User' });

module.exports = mongoose.model('User', userSchema)