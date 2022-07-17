const express = require('express');
const db = require('./config/connection');
const routes = require('./routes')

const User = require('./models/User.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// app.get('/all-users', (req, res) => {
//     User.find({}, (err, result) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send(err);
//         } else {
//             res.status(200).send(result)
//         }
//     });
// });


db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on PORT ${PORT}`)
    });
});

// app.post('/create', (req, res) => {
//     db.collection('userCollection').insertOne(
//         { username: req.body.username, email: req.body.email },
//         (err, results) => {
//             if (err) throw err;
//             res.json(results)
//         }
//     );
// });

// app.get('/read', (req, res) => {
//     db.collection('userCollection')
//     .find()
//     .toArray((err, results) => {
//         if (err) throw err;
//         res.send(results);
//     });
// });

