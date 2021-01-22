import PurchaseDTO from "./PurchaseDTO";

class CartDTO {
    constructor(cart){
        this.idCommerce = cart.idCommerce;
        this.idUser = cart.idUser;
        this.purchases = this.productsToPurchases(cart.purchases);
    }

    productsToPurchases(products) {
        let purchases = [];
        products.forEach(product => {
            let index = purchases.findIndex(p => p.idProduct === product.id);
            if(index === -1) {
                purchases.push(new PurchaseDTO(product));
            } else {
                let purchase = purchases[index];
                purchase.addQuantity();
                purchases.splice(index, 1, purchase);
            }
        });
        return purchases;
    }
}
export default CartDTO;