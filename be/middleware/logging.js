const timeLog = (req, res, next) => {
    console.log(`[Time: ${Date.now().toLocaleString()}] ${req.method} ${req.header('origin')} ${req.url}`)
    next()
}

export default timeLog;