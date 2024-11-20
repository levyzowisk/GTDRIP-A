import UserRepository from "../repository/UserRepository.js";
import { validatePassword } from "../utils/bcrypt.js";
class UserController {
    async create(request, response) {
        try {
            const createUser = await UserRepository.create(request.body);
            console.log(createUser);
            return response.status(201).json(createUser)
        }

        catch(error) {
            return response.status(400).json(error)
        }

    }

    async getUnique(request, response) {
        try {
            const getUser = await UserRepository.getUnique(request.body);
            

            // Se o registro com base no email for encontrado, a variável data é verdadeiro, se não, a variavel data é false, ou seja, é sinal que o dado não existe no Banco
            if(!getUser) {
                return response.status(400).json("Usuário não cadastrado no sistema!")
            }

            
             const verifyPassword =  validatePassword(request.body.password, getUser.senha)
             console.log(verifyPassword);
             

             if(verifyPassword === false) {
                return response.status(404).json("Senha invalida")
             }

             return response.status(200).json("Login Efetuado com sucesso!");

        }
        catch(error) {
            return response.status(400).json(error);
        }
    }
    
}

// Dever de caso, retornar statuscode de acordo com a necessidade






            // // Se o registro com base no email for encontrado, a variável data é verdadeiro, se não, a variavel data é false, ou seja, é sinal que o dado não existe no Banco
            // if(!data) {
            //     response.status
            // }


// async create(request, response) {
//     try {
//         const create = await UserRepository.create(request.body);
//         return response.status(201).json(create);
//     }

//     catch(error) {
//         return response.status(400).json();
//     }
// }

// async readAll(request, response){
//     try{
//         const readAll = await UserRepository.readAll()
//         return response.status(200).json(readAll)
//     }

//     catch(error){
//         return response.status(400).json(error)
//     }

// }
export default new UserController();