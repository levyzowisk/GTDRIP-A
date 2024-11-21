import { verifyToken } from "../utils/jwt.js";

const validate = (request, response, next) => {
    try {
        const token = request.headers.authorization;

        const validateToken = verifyToken(token);
        console.log(validateToken);
        
        next()
} catch(error) {
    console.log(error);
    
    return response.status(400).json("Token inválido!")
}

    
}


export default validate;

