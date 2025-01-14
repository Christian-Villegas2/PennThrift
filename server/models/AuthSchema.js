const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    
    id: ObjectId,
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
        maxLength: 60,
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
    date:{
        type: Date,
        default:Date.now,
    },
    items: [{type: Schema.Types.ObjectId, ref: 'Item'}],
    reviews_for: [{type: Schema.Types.ObjectId, ref: 'Review'}],
    reviews_to: [{type: Schema.Types.ObjectId, ref: 'Review'}],
    requests_for: [{type: Schema.Types.ObjectId, ref: 'Request'}],
    requests_to: [{type: Schema.Types.ObjectId, ref: 'Request'}],
    chats: [{type: Schema.Types.ObjectId, ref: 'Chat'}],
    pending_notifs: [{type: Schema.Types.ObjectId, ref: 'Notification'}],
});

module.exports = mongoose.model('PennThriftBackend', User, 'User');