import Repository, { baseUrl } from './config';

class UserService {
    async create(params) {
        const reponse = await Repository.post(
            `${baseUrl}/create/`,params
        )
        .then((response) => {
            return response;
        })
        .catch((error)=>{
            console.log(error.response)
            return(error.response)
        });
        return reponse;
    } 
    
    async getUsers() {
        const reponse = await Repository.get(
            `${baseUrl}/get_users/`
        )
        .then((response) => {
            return response;
        })
        .catch((error)=>{
            console.log(error.response)
            return(error.response)
        });
        return reponse;
    }
}

export default new UserService();