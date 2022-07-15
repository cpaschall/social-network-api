const express = require('express');
// const mongodb = require('mongodb').MongoClient;
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const { User } = require('./models');
// const port = 3001;

// const connectionStringURI = 'mongodb://127.0.0.1:27017/socialDB';

// let db = null;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongodb.connect(
//     connectionStringURI,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     (err, client) => {
//         db = client.db();
//         app.listen(port, () => {
//             console.log(`Listening on PORT ${port}`);
//         });
//     }
// );

// app.use(express.json());
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on PORt ${PORT}`)
    });
});

app.post('/create', (req, res) => {
    db.collection('userCollection').insertOne(
        { username: req.body.username, email: req.body.email },
        (err, results) => {
            if (err) throw err;
            res.json(results)
        }
    );
});

app.get('/read', (req, res) => {
    db.collection('userCollection')
    .find()
    .toArray((err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

