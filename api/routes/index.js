//here i will have my endpoints

const express = require('express');
const userController = require('../controllers/index');
const db = require('../modules/index')

//sample data
// const users =[
//     {id: 1, firstName: 'Abenathi', lastName: 'Sindapi', gender: 'Male', userDOB: '2000-03-04', emailAdd: 'abenathi@gmail.com', userPass: 'wrestling', profileUrl: 'nbbhjvhgvccg'},
//     {id: 2, firstName: 'Sidwell', lastName: 'Batyi', gender: 'Male', userDOB: '2004-06-14', emailAdd: 'sidwell@gmail.com', userPass: 'freestyling', profileUrl: 'bjhbjhhvhg'},
// ]


//get - home page
// router.get('/users', userController.getUsers);


const router = express.Router();



router.get('/', (req, res) =>{
    db.query('SELECT * FROM users', (err, results) => {
            if (err) {
                res.status(500).json({ error: 'Database error'});
    
            } else {
                res.json(results);
                console.log(results)
            }
    })
})


//get users --- display a list of users
router.get('/users', userController.getUsers);
// router.get('/users', (req, res) =>{
//     //fetch and display users
//     res.json(users)
// })

//get the user/:id --- display a single user
router.get('/user/:id', userController.getUserById);


// Get router view
router.get('/register', (req, res) => {
    res.render('register')
})


// router.get('/user/:id', (req, res) =>{
//     //fetch and display a single user
//     const userId = parseInt(req.params.id);
//     const user = users.find(user => user.id === userId);

//     if (user) {
//         res.json(user);
//     } else {
//         res.status(404).json({ message: 'User not found' });
//     }
// })

//put /user/:id --update the users record

router.put('/user/:id', userController.updateUserById);
// router.put('/user/:id', (req, res) => {
//     //allow user to update
//     const userId = parseInt(req.params.id);
//     const userIndex = users.findIndex(user => user.id === userId);

//     if (userIndex !== -1) {
//         const updatedUser = { ...users[userIndex], ...req.body };
//         users[userIndex] = updatedUser;
//         res.json({ message: 'User updated successfully', user: updatedUser });
//     } else {
//         res.status(404).json({ message: 'User not found' });
//     }
// })

//patch /user/:id ---modify a users record

// router.patch('/user/:id', (req, res) => {

// })

//delete a users record

router.delete('/user/:id', userController.deleteUserById);

// router.delete('/user/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     const userIndex = users.findIndex(user => user.id === userId);

//     if (userIndex !== -1) {
//         users.splice(userIndex, 1);
//         res.json({ message: 'User deleted successfully' });
//     } else {
//         res.status(404).json({ message: 'User not found' });
//     }
// });

module.exports = router;