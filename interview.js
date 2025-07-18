const users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"}
];

const orders = [
    {id: 1, order: "Book"},
    {id: 1, order: "Pen"},
    {id: 2, order: "Notebook"},
    {id: 5, order: "Pencil"},
];

for(let user of users){
    user.orders = [];
    for(let order of orders){
        if(user.id === order.id){
            user.orders.push(order.order);
        }
    }
}

console.log(users);

