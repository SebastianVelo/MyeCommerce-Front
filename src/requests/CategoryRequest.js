import IRequest from "./IRequest";

import Request from "../consts/request/Request";
import Criteria from "../consts/request/Criteria";

class CategoryRequest {
    static getById = async (id) => {
        return IRequest.getById(Request.CATEGORY, id);
    }
    
    static getByCommerce = async (idCommerce) => {
        return IRequest.getByX(Request.CATEGORY, Criteria.COMMERCE, idCommerce);
    }
    
    static deleteById = async (id) => {
        return IRequest.deleteById(Request.CATEGORY, id);
    }
}

export default CategoryRequest;