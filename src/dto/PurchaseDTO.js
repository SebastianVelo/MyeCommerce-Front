class PurchaseDTO {
    constructor(product) {
        this.quantity = 1;
        this.idProduct = product.id;
        this.price = product.price;
    }

    addQuantity(){
        this.quantity += 1;
    }
}
export default PurchaseDTO;