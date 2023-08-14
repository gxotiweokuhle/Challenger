//here i will have my functions to return responses to the routes

// const users =[
//     {id: 1, firstName: 'Abenathi', lastName: 'Sindapi', gender: 'Male', userDOB: '2000-03-04', emailAdd: 'abenathi@gmail.com', userPass: 'wrestling', profileUrl: 'nbbhjvhgvccg'},
//     {id: 2, firstName: 'Sidwell', lastName: 'Batyi', gender: 'Male', userDOB: '2004-06-14', emailAdd: 'sidwell@gmail.com', userPass: 'freestyling', profileUrl: 'bjhbjhhvhg'},
// ];


//Controller for fetching all users

exports.getUsers = (req, res) => {
    res.json(users);
};

//Controller for fetching a single user by id

exports.getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

//Controller for updating a users record

exports.updateUserById = (req, res) => {
    //allow user to update
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
        const updatedUser = { ...users[userIndex], ...req.body };
        users[userIndex] = updatedUser;
        res.json({ message: 'User updated successfully', user: updatedUser });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

//Controller for deleting 

exports.deleteUserById =  (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};
