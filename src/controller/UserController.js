import UserRepository from "../repository/UserRepository.js";
class UserController {
    async create(request, response) {
        try {
            const create = await UserRepository.create(request.body);
            return response.status(201).json(create);
        }

        catch(error) {
            return response.status(400).json();
        }
    }

    async readAll(request, response){
        try{
            const readAll = await UserRepository.readAll()
            return response.status(200).json(readAll)
        }

        catch(error){
            return response.status(400).json(error)
        }

    }
}

export default new UserController();