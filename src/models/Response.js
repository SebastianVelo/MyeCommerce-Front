import Result from "../consts/request/Result";

class Response {
    error(e) {
        this.msg = e;
        this.result = Result.ERROR;
    }
    success(response) {
        this.request = response.request;
        this.msg = response.msg;
        this.result = response.result;
        this.data = response.data;
    }

    isOk() {
        return this.result === Result.OK;
    }
}

export default Response;