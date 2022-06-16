class Restaurant{
    constructor(name,tables, menu,cashRegister, isOpen){
        this.name = name;
        this.tables = tables;
        this.menu = menu;
        this.cashRegister = cashRegister;
        this.isOpen = isOpen;
    }

    openRestaurant(state){
        this.isOpen = state;
    }
}
const ViejoDaveTables = [
    {
        id: '1',
        amountOfChairs: '2',
        taken:false
    },
    {
        id: '2',
        amountOfChairs: '3',
        taken:false
    },
    {
        id: '3',
        amountOfChairs: '4',
        taken:true
    },
    {
        id: '4',
        amountOfChairs: '2',
        taken:false
    },
    {
        id: '5',
        amountOfChairs: '3',
        taken:true
    },
]

const MahalTables = [
    {
        id: '1',
        amountOfChairs: '3',
        taken:false
    },
    {
        id: '2',
        amountOfChairs: '4',
        taken:false
    },
    {
        id: '3',
        amountOfChairs: '2',
        taken:false
    },
    {
        id: '4',
        amountOfChairs: '2',
        taken:false
    },
    {
        id: '5',
        amountOfChairs: '3',
        taken:false
    },
]

const ViejoDaveMenu = [
    {
        id : '1',
        dish:'Plain Hamburguer',
        price:650,
        stock: 3,
    },
    {
        id : '2',
        dish:'Cheese Hamburguer',
        price:700,
        stock: 2,
    },
    {
        id : '3',
        dish:'Complete Hamburguer',
        price:800,
        stock: 0,
    },
    {
        id : '4',
        dish:'Pizza Hamburguer',
        price:950,
        stock: 3,
    }
]

const MahalMenu = [
    {
        id: '1',
        dish:'Fatay',
        price: 350,
        stock: 10,
    },
    {
        id: '2',
        dish:'Falafel',
        price: 150,
        stock: 4,
    },
    {
        id: '3',
        dish:'kebab',
        price: 350,
        stock: 5,
    },
    {
        id: '4',
        dish:'Shawarma',
        price: 550,
        stock: 7,
    }
]


const ViejoDaveRestaurant = new Restaurant("Viejo Dave", ViejoDaveTables, ViejoDaveMenu, 10000, false);

ViejoDaveRestaurant.openRestaurant(true);
let counter = 0;
const amountOfTablesAvailable = ViejoDaveRestaurant.tables.filter((table) => {
    if (table.taken == false){
        counter++;
    }
    return counter;
    }
);

if(ViejoDaveRestaurant.isOpen){
     document.write("Viejo Dave esta abierto");
     document.write( `<br>` + "Viejo Dave tiene " + counter + " mesas disponibles");
    }
 const customerWantATable =  `<div> 
    <br>
    <button onClick="wantATable()">Si</button>
    <br>
    <button onClick="doNotWantATable()">No</button> </div>`;

  document.write(`<br>` + "Desea tomar una mesa? " + `<br>` + customerWantATable);

  let tablesShown = ``
  function wantATable(){
    for(let i = 0; i < ViejoDaveRestaurant.tables.length; i++) {
        if(ViejoDaveRestaurant.tables[i].taken == false){
            tablesShown +=`<br>` + "La mesa "+ ViejoDaveRestaurant.tables[i].id + 
            " esta disponible para hasta " + 
            ViejoDaveRestaurant.tables[i].amountOfChairs + 
            " personas." + `<button type="button" onClick="tableIsTaken(${
                ViejoDaveRestaurant.tables[i].id})"> Tomar </button>`;
        }
    }
    document.write(tablesShown);
  }

  function tableIsTaken(tableId){
    ViejoDaveRestaurant.tables.forEach(table => {
        if (table.id == tableId) return table.taken = true});
    console.log(ViejoDaveRestaurant.tables); 
    document.write(`<br>` + "Usted ha tomado la mesa " + tableId )
  }

  function doNotWantATable(){

    const customerToTakeAway =  `<div> 
    <br>
    <button onClick="showMenu()">Si</button>
    <br>
    <button onClick="goodBye()">No</button> </div>`;

    document.write(`<br>` + "Desea pedir para llevar?" + `<br>` + customerToTakeAway)
  }

  let menuShown = ``;
  const stopBuying = `<br> <button onClick="goodBye()">Pagar</button>`


  function showMenu() {
    ViejoDaveRestaurant.menu.forEach((menu, index) => {
        if(menu.stock > 0){
            menuShown += `<div> ${menu.dish} -$${menu.price}  
                <button onClick="addDishToCustomer(${ViejoDaveRestaurant.menu[index].id})">Agregar Comida</button>
            </div> `

        }
    })

    document.write(`<br>` +"Menu " + `<br>` + menuShown)
    document.write(stopBuying);
  }

  let shoppingCart = [];
  let totalToPay=0;
  function addDishToCustomer(menuTakenId) {
    const dishFinded = ViejoDaveRestaurant.menu.find(menu => menu.id == menuTakenId);
    shoppingCart.push(dishFinded);
    totalToPay+=dishFinded.price;
    ViejoDaveRestaurant.menu.forEach((menu) => {
        if(menu.id == menuTakenId){
            menu.stock--;
        }
    })
    console.log(shoppingCart);
    console.log("Total: $" + totalToPay);
  }
 function goodBye(){
    alert("Gracias por venir, vuelva pronto");
 }