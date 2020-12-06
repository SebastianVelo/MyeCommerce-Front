import IRequest from "./IRequest";

import Request from "../consts/request/Request";
import Criteria from "../consts/request/Criteria";

class CommerceRequest {
    static getById = async (id) => {
        return IRequest.getById(Request.COMMERCE, id);
    }
    
    static getByPath = async (path) => {
        return IRequest.getByX(Request.COMMERCE, Criteria.PATH, path);
    }
    
    static deleteById = async (id) => {
        return IRequest.deleteById(Request.COMMERCE, id);
    }
}

export default CommerceRequest;