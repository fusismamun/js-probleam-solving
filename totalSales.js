function totalSales(shirt, pant, shoe){
    // Price 
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 300;
    // Calculate Quantity 
    let shirtQuantity = shirt * shirtPrice;
    let pantQuantity = pant * pantPrice;
    let shoeQuantity = shoe * shoePrice;
    // Total Price 
    let totalPrice = shirtQuantity + pantQuantity + shoeQuantity;
    return totalPrice;
}
let check = totalSales(1, 1 , 1 );
console.log(check);