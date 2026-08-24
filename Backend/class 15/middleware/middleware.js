import jwt from "jsonwebtoken"
export const authMiddleware = async (request, response, next) => {
    try {
        // 1.get jwt token
        const token = request.headers.authorization.split(" ")[1]
        // console.log("auth token", token)
        // 2. verify jwt token if true its return sign obj
        const isVerify = await jwt.verify(token, process.env.JWT_SECRET)
        // console.log("isVerify", isVerify)
        if (isVerify) {
            // save user email or id in request obj
            request.userId = isVerify._id
            request.userEmail = isVerify.email
            next()
        } else {
            throw new Error()
        }


    } catch (error) {
        response.json({
            status: false,
            data: null,
            message: "UnAuthorize User!"
        })
    }
}