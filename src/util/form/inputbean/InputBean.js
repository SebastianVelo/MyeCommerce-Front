class InputBean {
    constructor(id, label, action, type){
        this.id = id;
        this.label = label;
        this.action = action;
        this.type = type ? type : "text";
    }
}
export default InputBean;