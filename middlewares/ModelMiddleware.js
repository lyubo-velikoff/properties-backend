module.exports = (model) => {
    return (req, res, next) => {
        req.modelName = model
        next()
    }
}