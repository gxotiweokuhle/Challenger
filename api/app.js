//set up express
const express = require('express');
const app = express();
const db = require('./modules/index'); //import my dependency
const port = process.env.port || 4000;
const cors = require('cors');




//require routes
const routes = require('./routes');


//set up middleware
app.use(express.json());
app.use(cors());

//use routes
app.use('/', routes);

// sql connection
// const db = mysql.createConnection({
//     host:'bhg4lowxbarsk5uczcqs-mysql.services.clever-cloud.com',
//     user: 'upakifvdnxj3iwhd',
//     password:'d5ITfnQves6NXueaZnfi',
//     database:'bhg4lowxbarsk5uczcqs'
// })

// db.connect((err) =>{
//     if(err) {
//         // res.status(500).json({message: 'Error connecting to MySQL'})
//         console.error('Error connecting to MySQL', err);

//     } else{
//         // res.json({ message: 'Connected to MySQL' });
//         console.log('Connected to MySQL database');
//     }
// });
app.get('/', (req, res) => {
    
    res.redirect('/users')
        // db.query('SELECT * FROM users', (err, results) => {
        //     if (err) {
        //         res.status(500).json({ error: 'Database error'});
    
        //     } else {
        //         res.json(results);
        //         console.log(results)
        //     }
        // });
    });



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
