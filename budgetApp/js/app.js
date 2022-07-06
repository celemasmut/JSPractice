const actualPresupuesto = document.getElementById('presupuesto');
const body = document.getElementById('body');
const porcentaje = document.getElementById('porcentaje');
const misIngresos = document.getElementById('ingresos');
const misEgresos = document.getElementById('egresos');
const ingresosList = document.getElementById('lista-ingresos');
const egresosList = document.getElementById('lista-egresos');


const ingresos = [
    new Ingreso('Salario',5654.00),
    new Ingreso('Venta de coche',1500.00)
];

const egresos = [
    new Egreso('Renta',8888.00),
    new Egreso('Ropa',346.00)
];

let cargarApp = ()=> {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = ()=> {
    let totalIngreso =0;
    ingresos.forEach((ingreso) => {
        totalIngreso += ingreso.valor;
    })
    return totalIngreso;
}

let totalEgresos = ()=> {
    let totalEgreso =0;
    egresos.forEach((egreso) => {
        totalEgreso += egreso.valor;
    })
    return totalEgreso;
}

let cargarCabecero = ()=>{
    debugger;
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgresos = totalEgresos()/totalIngresos();
    actualPresupuesto.innerHTML = formatoMoneda(presupuesto); 
    porcentaje.innerHTML = formatoPorcentaje(porcentajeEgresos);
    misIngresos.innerHTML = formatoMoneda(totalIngresos());
    misEgresos.innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor)=> {
    return valor.toLocaleString('en-US', {style:'currency', currency:'USD', minimunFractionDigits:2});
}

const formatoPorcentaje = (valor)=> {
    return valor.toLocaleString('en-US', {style:'percent', minimunFractionDigits:2 });
}

const cargarIngresos = ()=> {
    let ingresosHTML = '';
    ingresos.forEach((ingreso) => {
        ingresosHTML += crearIngresoHTML(ingreso);
    })
    ingresosList.innerHTML = ingresosHTML;
}

const cargarEgresos = ()=> {
    let egresosHTML = '';
    egresos.forEach((egreso) => {
        egresosHTML += crearEgresoHTML(egreso);
    })
    egresosList.innerHTML = egresosHTML;
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-outline"
                     onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
}
const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalEgresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-outline" 
                     onclick='eliminarEgreso(${egreso.id})' ></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return egresoHTML;
}

const eliminarIngreso = (ingresoId) =>{
    const indiceEliminar = ingresos.findIndex(ingreso =>ingreso.id === ingresoId);
    ingresos.splice(indiceEliminar,1);
    cargarCabecero();
    cargarIngresos();
}

const eliminarEgreso = (egresoId) =>{
    const indiceEliminar = egresos.findIndex(egreso =>egreso.id === egresoId);
    egresos.splice(indiceEliminar,1);
    cargarCabecero();
    cargarEgresos();
}

const agregarDato = ()=> {
    const form = document.forms['form'];
    const tipo = form ['tipo'];
    const descripcion = form ['descripcion'];
    const valor = form ['valor'];
    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, Number(valor.value)));
            cargarCabecero();
            cargarIngresos();
        }else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, Number(valor.value)));
            cargarCabecero();
            cargarEgresos();
        }
    }
}
