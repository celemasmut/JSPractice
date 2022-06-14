class Restaurant{
    constructor(name,tables, menu,cashRegister, isOpen){
        this.name = name;
        this.tables = tables;
        this.menu = menu;
        this.cashRegister = cashRegister;
        this.isOpen = isOpen;
    }

    openRestaurant(state){
        isOpen = state;
    }
}
const ViejoDaveTables = [
    {
        id: '1',
        amountOfChairs: '2'
    },
    {
        id: '2',
        amountOfChairs: '3'
    },
    {
        id: '3',
        amountOfChairs: '4'
    },
    {
        id: '4',
        amountOfChairs: '2'
    },
    {
        id: '5',
        amountOfChairs: '3'
    },
]

const MahalTables = [
    {
        id: '1',
        amountOfChairs: '3'
    },
    {
        id: '2',
        amountOfChairs: '4'
    },
    {
        id: '3',
        amountOfChairs: '2'
    },
    {
        id: '4',
        amountOfChairs: '2'
    },
    {
        id: '5',
        amountOfChairs: '3'
    },
]

const ViejoDaveMenu = [
    {
        id : '1',
        dish:'Plain Hamburguer',
        price:650,
        stock: 3,
    }
]

const MahalMenu = [
    {
        id: '1',
        dish:'Fatay',
        price: 350,
        stock: 10,
    }
]