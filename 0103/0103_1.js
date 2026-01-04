const rentals = [
  {
    userId: 1,
    userName: "Kim",
    isPremium: true,
    books: [
      { title: "JavaScript 입문", fee: 5000, days: 7 },
      { title: "React 완벽 가이드", fee: 7000, days: 5 }
    ]
  },
  {
    userId: 2,
    userName: "Lee",
    isPremium: false,
    books: [
      { title: "HTML/CSS 기초", fee: 3000, days: 10 }
    ]
  },
  {
    userId: 3,
    userName: "Park",
    isPremium: true,
    books: []
  }
];


function calculateRentalSummary(rentals){
  let result = [];

  for(let i=0; i<rentals.length; i++){
    let user = rentals[i]
    let totalFee = 0;
    if(user.books.length === 0) continue;
    for(let j=0; j<user.books.length; j++){
      let book = user.books[j]
      totalFee += book.fee * book.days
    }
    
    if(user.isPremium === true){
    totalFee*=0.8
    }

    let summary = {};
    summary.name = user.userName;
    summary.totalPrice = totalFee;
    summary.orderCount = user.books.length;
    
    result.push(summary);
    
  } 
    console.log(result)
  }

  calculateRentalSummary(rentals);

// 다시 해보기