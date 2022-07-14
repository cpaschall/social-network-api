const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = 'mongodb://127.0.0.1:27017/socialDB';

let db = null;

mongodb.connect(
    connectionStringURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        db = client.db();
        app.listen(port, () => {
            console.log(`Listening on PORT ${port}`);
        });
    }
);

app.use(express.json());

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

