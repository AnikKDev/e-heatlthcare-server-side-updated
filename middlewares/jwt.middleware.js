const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(400).send({
            success: false,
            message: "unauthorized access"
        })
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(403).send({
                success: false,
                message: "Forbidden access"
            })
        }
        req.decoded = decoded;
        next()
    })
    // console.log('avbc')
}

module.exports = verifyJWT;