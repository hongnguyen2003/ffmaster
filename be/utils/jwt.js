import jwt from 'jsonwebtoken'

const verifyToken = (token) => {
    let key = process.env.JWT_SECRET
    let decoded = null
    try {
        decoded = jwt.verify(token, key, {
            algorithm: 'HS256',
        })
    } catch (err) {
    }
    return decoded
}


const createJWT = (payload, isRefresh = false) => {
    let key = process.env.JWT_SECRET
    let token = null
    try {
        token = jwt.sign(payload, key, {
            algorithm: 'HS256',
            expiresIn: isRefresh ? '30d' : '10m',
        },);
    } catch (err) { }

    return token
}



export { verifyToken, createJWT };