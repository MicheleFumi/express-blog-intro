const post= require('../Data/post.js')

function index(req, res) {
    res.json({
        data : post,
        count : post.length
    })
}

module.exports = {
    index
}