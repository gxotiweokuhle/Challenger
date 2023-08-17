const {sign, verify} = require('jsonwebtoken')

require('dotnev').config()

function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    })
}//creating a tokennbhjjcabhvv ncab DV BCGHVFD