import IRequest from "./IRequest";

import Request from "../consts/request/Request";
import Criteria from "../consts/request/Criteria";

class UserRequest {
    static getById = async (id) => {
        return IRequest.getById(Request.USER, id);
    }
    
    static check = async (user, password) => {
        return IRequest.getByX(Request.USER, Criteria.CHECK, user + "/" + password);
    }
    
    static deleteById = async (id) => {
        return IRequest.deleteById(Request.USER, id);
    }

    static insert = async (user) => {
        return IRequest.insert(Request.USER, user);
    }
}

export default UserRequest;