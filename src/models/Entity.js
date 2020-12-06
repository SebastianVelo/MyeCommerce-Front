class Entity {
    constructor(data) {
        let keys = Object.keys(data);
        keys.forEach(key => this[key] = data[key]);
    }
}
export default Entity;