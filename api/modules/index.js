// // here i will connect my sql and allow crud operations

// const app = express();

// //get all the records from the users table
// app.get('/users', (req, res) => {
    
//     db.query('SELECT * FROM users', (err, results) => {
//         if (err) {
//             res.status(500).json({ error: 'Database error'});

//         } else {
//             res.json(results);
//             console.log(results)
//         }
//     });
// });

// //add more routes

// //allow the user to add new entries to the  user table , that is to post

// app.post('/users', (req, res) => {
    
//     const { firstName, lastName, gender, userDOB, emailAdd, userPass, profileUrl} = req.body;
//     const insertQuery = 'INSERT INTO users (firstName, lastName, gender, userDOB, emailAdd, userPass, profileUrl ) VALUES (?, ?)';

//     db.query(insertQuery, [firstName, lastName, gender, userDOB, emailAdd, userPass, profileUrl], (err, results) => {
//         if (err) {
//             res.status(500).json({ error: 'Database error' });
//         } else {
//             res.json({ message: 'User added successfully' });
//             res.json(results);
//         }
//     });
// });

// // allow the user to update user information

// app.put('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     const { firstName, lastName, gender, userDOB, emailAdd, userPass, profileUrl } = req.body;
//     const updateQuery = 'UPDATE users SET firstName = ?, lastName = ?, gender= ?, userDOB = ?, emailAdd = ?, userPass = ?, profileUrl = ?,  WHERE id = ?';

//     db.query(updateQuery, [firstName, lastName, gender, userDOB, emailAdd, userPass, profileUrl,userId], (err, result) => {
//         if (err) {
//             res.status(500).json({ error: 'Database error' });
//         } else {
//             res.json({ message: 'User updated successfully' });
//         }
//     });
// });

// // allow user to delete information

// app.delete('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     const deleteQuery = 'DELETE FROM users WHERE id = ?';

//     db.query(deleteQuery, [userId], (err, result) => {
//         if (err) {
//             res.status(500).json({ error: 'Database error' });
//         } else {
//             res.json({ message: 'User deleted successfully' });
//         }
//     });
// });

// //allow to display a single user

// app.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     const selectQuery = 'SELECT * FROM users WHERE id = ?';

//     db.query(selectQuery, [userId], (err, results) => {
//         if (err) {
//             res.status(500).json({ error: 'Database error' });
//         } else {
//             if (results.length > 0) {
//                 res.json(results[0]);
//             } else {
//                 res.status(404).json({ error: 'User not found' });
//             }
//         }
//     });
// });


const mysql = require('mysql'); //import my dependency


const db = mysql.createConnection({
    host:'bhg4lowxbarsk5uczcqs-mysql.services.clever-cloud.com',
    user: 'upakifvdnxj3iwhd',
    password:'d5ITfnQves6NXueaZnfi',
    database:'bhg4lowxbarsk5uczcqs'
})

db.connect((err) =>{
    if(err) {
        // res.status(500).json({message: 'Error connecting to MySQL'})
        console.error('Error connecting to MySQL', err);

    } else{
        // res.json({ message: 'Connected to MySQL' });
        console.log('Connected to MySQL database');
    }
});

module.exports = db;