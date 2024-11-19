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
            return error;
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