import jwt from "jsonwebtoken"
export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const isVerify = jwt.verify(token, process.env.JWT_SECRET)
        console.log("isVerify", isVerify)

        if (isVerify.email) {
            req.userId = isVerify._id
            next()
        }

    } catch (error) {
        res.status(401).json({
            message: "unAuth user",
            status: false,
            data: null
        })
    }
}