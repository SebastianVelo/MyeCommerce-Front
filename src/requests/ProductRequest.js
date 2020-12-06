import IRequest from "./IRequest";

import Request from "../consts/request/Request";
import Criteria from "../consts/request/Criteria";

class ProductRequest {
    static getById = async (id) => {
        return IRequest.getById(Request.PRODUCT, id);
    }
    
    static getByCategory = async (idCategory) => {
        return IRequest.getByX(Request.PRODUCT, Criteria.CATEGORY, idCategory);
    }

    static getShowInHome = async (idCommerce) => {
        return IRequest.getByX(Request.PRODUCT, Criteria.HOME, idCommerce);
    }
    
    static deleteById = async (id) => {
        return IRequest.deleteById(Request.PRODUCT, id);
    }
}

export default ProductRequest;