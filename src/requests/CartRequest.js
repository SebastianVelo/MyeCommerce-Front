import IRequest from "./IRequest";

import Request from "../consts/request/Request";
import Criteria from "../consts/request/Criteria";

class CartRequest {
    static getById = async (id) => {
        return IRequest.getById(Request.CART, id);
    }    
    
    static getByUser = async (idUser) => {
        return IRequest.getByX(Request.CART, Criteria.USER, idUser);
    }

    static deleteById = async (id) => {
        return IRequest.deleteById(Request.CART, id);
    }

    static insert = async (cart) => {
        return IRequest.insert(Request.CART, cart);
    }
}

export default CartRequest;