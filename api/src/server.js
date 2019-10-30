const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require('./routes');

const appConf = {
    'host': 'localhost',
    'port': 3001
}

const db = {
    host: "quiztrivia-imkjc.mongodb.net",
    user: "wizard101",
    pass: "balance101"
};

try {
    mongoose.connect(`mongodb+srv://${db.user}:${db.pass}@${db.host}/triviaDB`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
} catch (error) {
    console.log(error);
}

app.use(express.json());
app.use(routes);
app.listen(appConf.port, appConf.host);