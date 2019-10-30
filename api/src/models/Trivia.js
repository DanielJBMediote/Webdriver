const mongoose = require('mongoose');

const TriviaShema = new mongoose.Schema({
    group: String,
    question: {
        type: String,
        index: true,
        unique: true,
    },
    answer: String,
});

module.exports = mongoose.model('Trivia', TriviaShema);