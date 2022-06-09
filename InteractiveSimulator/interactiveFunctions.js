const productosEnElCarrito = [];
const productos = [

    {id:1, titulo:'Empanadas', precio: 500, hayStock: true},
    
    {id:2, titulo:'Pizza', precio: 2000, hayStock:false},
    
    {id:3, titulo:'Pastas', precio: 1200, hayStock:true},
    {id:4, titulo:'Asado', precio: 3000, hayStock:true},
    {id:5, titulo:'Sushi', precio: 2500, hayStock:true},
    {id:6, titulo:'Hamburgueza', precio: 1200, hayStock:true},
    {id:7, titulo:'Helado', precio: 1200, hayStock:true}
    
    ];
    
    let acumulador = ``;
    
    for (let i = 0; i < productos.length; i++){

        if(productos[i].hayStock){
            
            acumulador += `<div> ${productos[i].titulo} - $${productos[i].precio}
            <br>
            <button onClick="agregarAlCarrito(${productos[i].id})">Agregar</button>
             </div>`;    
            
        }
    
    }
    
    document.write(acumulador);

    function impuesto(precio){
        return precio * 1.21;
    }
    let total=0;
    function totalEnCarrito(productosEnElCarrito){
        
        productosEnElCarrito.forEach(producto => total += impuesto(producto.precio));
        console.log("Total del carrito incluido impuesto : " + total);
    }


    function agregarAlCarrito(idDeProducto){
    
    const indiceEncontrado = productos.findIndex(producto => producto.id == idDeProducto);
    
    productosEnElCarrito.push(productos[indiceEncontrado]);
    
    console.log("En carrito : " + productosEnElCarrito.map((producto) => producto.titulo));

    totalEnCarrito(productosEnElCarrito);
    
    }

    const pagarEnCuotas = `<div> <br> <button onClick="calcularMontoEnCuotas()"  > Pagar en cuotas </button> </div>`;
    document.write(pagarEnCuotas);

    function calcularMontoEnCuotas(){
        const cantCuotas = prompt("Ingrese la cantidad de cuotas que desea");
        const totalEnCuotas = total / cantCuotas;
        alert("Su total es de : " + totalEnCuotas);
    }