import prisma  from "../connection/connection.js";
class UserRepository {
    async create(data) {
         return await prisma.users.create({
            data: {...data}
         })
    }

    async readAll() {
        return await prisma.produtos.findMany({
            include: {
                img: true
            }
        });
    }
}

export default new UserRepository();



// route --> controller --> repository(guardar os dados)