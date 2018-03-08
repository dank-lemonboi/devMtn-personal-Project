module.exports = 
    function(req, res, next) {
        if(!req.sesssion.user) {
            req.session.user = {
                userName: '',
                id: ''
            }
        }
        next();
    }