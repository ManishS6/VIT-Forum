const jwt = require('jsonwebtoken');
// TODO: update code wrt google auth custom token
const auth = (req, res, next) => {
    try{
        const token = req.header("x-auth-token");
        if(!token)
            return res.redirect('/login') // might work
            // return res.status(401).json({msg: "No authentication token, access denied"});
        
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified) return res.status(401).json({msg: "Token verification failed, auth failed"});
        req.user = verified.id;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
   
}

module.exports = auth;