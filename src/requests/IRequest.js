import Response from "../models/Response";

const URL = "http://localhost:8080/myecommerce/";

class IRequest {
    static genericRequest = async (path, method, body) => {
        let response = new Response();
        try {
            let dataFetched = await fetch(URL + path, { 
                method: method,
                headers: {
                    "Accept": 'application/json',
                    "Content-type": 'application/json'
                }, 
                body: body 
            });
            response.success(await dataFetched.json());
        } catch(e) {
            response.error(e);
        }
        return response;
    }

    static getById = async (REQUEST, id) => {
        return await this.genericRequest(REQUEST + id, "GET");
    };
    
    static getByX = async (REQUEST, CRITERIA, value) => {
        return await this.genericRequest(REQUEST + CRITERIA + value, "GET");
    };
    
    static deleteById = async (REQUEST, id) => {
        return await this.genericRequest(REQUEST + id, "DELETE");
    };

    static insert = async (REQUEST, body) => {
        return await this.genericRequest(REQUEST, "PUT", JSON.stringify(body));
    }
}

export default IRequest;