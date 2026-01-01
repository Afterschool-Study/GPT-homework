// 6-1

let age = 18;

if(age>=20){
    console.log("성인")
} else{
    console.log("미성년자")
}

// 6-2

let num = -3;

if(num>0){
    console.log("양수")
} else if(num === 0){
    console.log("0")
} else {
    console.log("음수")
}

console.log(num>0? "양수" : num === 0? "0" : "음수")

// 7-1
let id = "admin";
let pw = "1234";

if( id === "admin" && pw === "1234"){
    console.log("로그인 성공")
}

//7-2

let age2 = 10;
let height = 150;

if(age2 >= 12 || height>= 140){
    console.log("탑승 가능")
} else{console.log("탑승 불가")}

console.log(age2 >= 12 || height>= 140? "탑승 가능" : "탑승 불가")

//8-1

for(let i=1; i<=10; i++){
    console.log(i)
}

//8-2
for(let i=1; i<50; i++){
    if(i%3 === 0){
        console.log(i)
    }
}

//9-1
let day = 3;

switch(day){
    case 1:
    console.log("월")
    break;
    
    case 2:
    console.log("화")
    break;
    
    case 3:
    console.log("수")
    break;
    
    case 4:
    console.log("목")
    break;
    
    case 5:
    console.log("금")
    break;
    
    case 6:
    console.log("토")
    break;
    
    case 7:
    console.log("일")
    break;
}

//9-2
let grade = "B";

switch(grade){
    case "A":
        console.log("우수")
        break;
    case "B":
        console.log("양호")
        break;
    case "C":
        console.log("보통")
        break;
    case "D":
        console.log("탈락")
        break;
    default: console.log("잘못된 등급")
}

//10-1

function add(a,b){
    console.log(a+b);
}

add(3,5);

//10-2
let result = checkEvenOdd(7);


function checkEvenOdd(num){
if(num%2 === 0){
    return "짝수"
}else{return "홀수"
    
}
}

console.log(result);