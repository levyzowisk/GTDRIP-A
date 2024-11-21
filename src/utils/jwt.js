import { genSalt } from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = process.env.SIGNATURE;

const generateToken  = (email) => {
    return jwt.sign({
        role: "adm",
        email: email,
    },
 SECRET, {expiresIn: '1h'}
)}

export default generateToken;

// const loginUser = (email: string): string => {
//     return jwt.sign({
//         email: email,
//         role: 'admin'
//     }, secret,{expiresIn: '1h' } )