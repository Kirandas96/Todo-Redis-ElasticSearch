const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        index: true, text: true
    }
});
todoSchema.index({ text: 'text' });

module.exports = mongoose.model('ToDo', todoSchema);