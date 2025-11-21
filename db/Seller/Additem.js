const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    itemImage: String,    
    description: String,
    price: { 
        type: Number, 
        required: true 
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users' 
    },
    userName: String,
});

module.exports = mongoose.model('books', bookSchema);
