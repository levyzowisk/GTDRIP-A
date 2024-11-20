import prisma  from "../connection/connection.js";
import cryptPassword from "../utils/bcrypt.js";
class UserRepository {

    async create(body) {
        try {

            const hashPassword = cryptPassword(body.password);
            const createResult = await prisma.users.create({
                data: {
                    email: body.email,
                    senha: hashPassword,
                    nome:  body.name
                } 
            })
            return createResult;
        }
        catch(error) {
            throw error;
        }
    //    return await prisma.users.create() 
    }

    async getAll() {
        try {
            const dataAll = await prisma.users.findMany()
            return dataAll;
        }

        catch(error) {
            return error;
        }
    }

    // getUnique - findInuque
    async getUnique(body) {
        try {
            const data = await prisma.users.findUnique({
                where: {
                    email: body.email
                }
            })
            return data;
        }

        catch(error) {
            // Verificar se esse error, dessa forma pode ser capturado no controller;
            throw error;
        }
    }

}

export default new UserRepository();



// route --> controller --> repository(guardar os dados)
// async

// async create(data) {
//      return await prisma.users.create({
//         data: {...data}
//      })
// }

// async readAll() {
//     return await prisma.produtos.findMany({
//         include: {
//             img: true
//         }
//     });
// }