import IRequest from "./IRequest";

import Request from "../consts/request/Request";
import Criteria from "../consts/request/Criteria";

class CommerceStyleRequest {
    static getById = async (id) => {
        return IRequest.getById(Request.COMMERCESTYLE, id);
    }
    
    static getByCommerce = async (idCommerce) => {
        return IRequest.getByX(Request.COMMERCESTYLE, Criteria.COMMERCE, idCommerce);
    }
    
    static deleteById = async (id) => {
        return IRequest.deleteById(Request.COMMERCESTYLE, id);
    }
}

export default CommerceStyleRequest;