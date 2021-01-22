import Entity from "./Entity";

class Cart {
    constructor() {
        this.idCommerce = 0;
        this.idUser = 0;
        this.purchases = [];
    }

    add(product) {
        product = new Entity(product);
        product.hashId = Date.now();
        this.purchases.push(product);
    }

    remove(hashId) {
        this.purchases = this.purchases.filter(product => product.hashId !== hashId);
    }

    empty() {
        this.purchases = [];
    }

    setIdCommerce(idCommerce) {
        this.idCommerce = idCommerce;
    }    
    
    setIdUser(idUser) {
        this.idUser = idUser;
    }
}
export default Cart;