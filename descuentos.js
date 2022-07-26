//const precioOriginal = 120;
//const descuento = 18;

//const porcentajePrecioConDescuento= precioOriginal- descuento;
//const precioConDescuento = (precioOriginal *porcentajePrecioConDescuento )/100;
/*
console.log({
            precioOriginal,
            descuento,
            porcentajePrecioConDescuento,
            precioConDescuento,
        });*/

function calculaPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento= 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento )/100;
    return precioConDescuento;
}
function onClickButtoPrice(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calculaPrecioConDescuento(priceValue,discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son $" + precioConDescuento;
}    