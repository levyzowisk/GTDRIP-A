import bcrypt from "bcrypt";

const SALTS = parseInt(process.env.SALT_ROUNDS);

const cryptPassword = (password) => {
   return bcrypt.hashSync(password, SALTS)
}

export const validatePassword = (password, passwordHash) => {   
   return bcrypt.compareSync(password, passwordHash);
}

export default cryptPassword;