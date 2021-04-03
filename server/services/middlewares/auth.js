const auth = (req, res, next) => {
    try {
        req.userId = req.header('Authorization');
        next();
    } catch (error) {
        res.staus(401).send({ erros: 'Please authenticate' });
    }
}

module.exports = auth;