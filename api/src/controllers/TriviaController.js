const Trivia = require('../models/Trivia');

module.exports = {

    async indexGroup(request, response) {
        let dataArr = await Trivia.find();
        let group = [];

        dataArr.forEach(element => {
            if (!group.includes(element.group)) {
                group.push(element.group);
            }
        });
        response.json(group);
    },

    async indexAnswer(request, response) {
        const { question } = request.body;
        // console.log(question);
        
        let res = await Trivia.findOne({ question });
        
        let { answer } = res;
        
        response.json(answer);
    },

    async store(request, response) {
        const triviaData = request.body;

        try {
            let data = await Trivia.create(triviaData);
            response.json(data);
        } catch (error) {
            console.log(error);
        }
    }
}