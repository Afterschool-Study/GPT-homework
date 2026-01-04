const orders = [
  { id: 1, customer: "김철수", items: ["노트북", "마우스"], total: 1200000, status: "배송중" },
  { id: 2, customer: "이영희", items: ["키보드"], total: 50000, status: "완료" },
  { id: 3, customer: "박지성", items: ["모니터", "거치대"], total: 300000, status: "배송중" },
  { id: 4, customer: "최유리", items: ["USB Hub"], total: 20000, status: "배송중" },
];


// const processOrders = (orderList) => {
//     let result = [];
//     for(let i = 0; i < orderList.length; i++){
//         let order = orderList[i]
//         if(order.status != "배송중") continue;
//         const isVip = order.total >= 100000;
//         result.push({...order, isVip})
//     }
//     return result
// } 

// console.log(processOrders(orders));


const processOrders = (orderList) => {
    let result = [];

    for(let i=0; i<orderList.length; i++){
        let order = orderList[i]
        if(order.status != "배송중") continue;
        const isVip = order.total >=100000;
        result.push({...order, isVip})
    } 
    return result
}

console.log(processOrders(orders));