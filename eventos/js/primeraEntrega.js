class Restaurant{
    constructor(name,tables, menu,cashRegister, isOpen){
        this.name = name;
        this.tables = tables;
        this.menu = menu;
        this.cashRegister = cashRegister;
        this.isOpen = isOpen;
        this.customers = [];
    }

    openRestaurant(state){
        this.isOpen = state;
    }
    addCustomer(customer){
        this.customers.push(customer);
    }
}

class Customer{
    constructor(name,tableId, menu){
        this.name = name;
        this.tableId = tableId;
        this.menu = menu;
        this.totalToPay = 0;
    }
    addMenu(menu){
        this.menu.push(menu);
    }
    refreshTotalToPay(toPay){
        this.totalToPay += toPay;
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
let tableCounter = 0;
ViejoDaveRestaurant.tables.forEach((table) => {
    table.taken == false && tableCounter++;
});
 const restaurantOpen = `
<div class="col mb-5">
<div class="card h-100">
    <!-- Product image-->
    <img class="card-img-top" src="./assets/img/ViejoDave.jpeg" alt="..." />
    <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">ViejoDave</h5>
            <p>Tiene ${tableCounter} mesas liberadas</p>
            
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a onclick="wantATable()" class="btn btn-outline-dark mt-auto" href="#">Reservar</a></div>

        <div class="text-center"><a onclick="doNotWantATable()" class="btn btn-outline-dark mt-auto" href="#">Pedir para llevar</a></div>
    </div>
</div>
</div>
`


if(ViejoDaveRestaurant.isOpen){
    document.getElementById('card-container').innerHTML = restaurantOpen; 
}

  let tablesShown = ``
  function wantATable(){

    for(let i = 0; i < ViejoDaveRestaurant.tables.length; i++) {
        if(ViejoDaveRestaurant.tables[i].taken == false){
            tablesShown += ` <div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src="./assets/img/ViejoDave.jpeg" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">La mesa ${ViejoDaveRestaurant.tables[i].id} </h5>
                        <p>para hasta ${ViejoDaveRestaurant.tables[i].amountOfChairs} personas</p>
                        
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a  onClick="tableIsTaken(${
                        ViejoDaveRestaurant.tables[i].id})" class="btn btn-outline-dark mt-auto" href="#">Tomar mesa</a></div>
            
                </div>
            </div>
            </div> `
        }
    }

    document.getElementById('card-container').innerHTML = tablesShown; 

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
 let tableTaken = '';
 function tableIsTaken(tableId){
    ViejoDaveRestaurant.tables.forEach(table => {
        if (table.id == tableId) return table.taken = true});
    console.log(ViejoDaveRestaurant.tables); 
    tableTaken = ` <div class="col mb-5">
    <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src="./assets/img/user.png" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">Ha tomado mesa ${tableId} </h5>                        
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a  onClick="showMenu()" class="btn btn-outline-dark mt-auto" href="#">Ver Menu</a></div>
    
        </div>
    </div>
    </div>
    `
    document.getElementById('card-container').innerHTML = tableTaken; 
  }

  function restaurantSelection(){
    const restaurantChosen = prompt("Ingresa a \n 1) Viejo Dave \n 2) Mahal");
    return restaurantChosen;
  }

