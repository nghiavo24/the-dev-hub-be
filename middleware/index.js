const admin = require('../db/firebase-config');

class Middleware{
    async decodeToken(req, res, next) {
        let token
        if(req.headers.authorization){
            console.log(req.headers)
            token = req.headers.authorization.split(' ')[1];
            console.log(token)
        } else {
            return res.status(401).json({ message: 'No authentication provided'})
        }
        try{
            const decodeValue = await admin.auth().verifyIdToken(token);
            if(decodeValue) {
                console.log(decodeValue);
                return next();
            }
            return res.json({message: 'Unauthorized user!'});
        }
        catch(error){
            console.log(error);
            return res.json({message: 'Internal Error'});
        }
    }
}

module.exports = new Middleware();