const students = [
  { name: "철수", score: 85 },
  { name: "영희", score: 92 },
  { name: "민수", score: 76 },
  { name: "지수", score: 59 }
];

let scores = 0;
const study = () =>{
for(let i =0; i<students.length; i++){
    let student = students[i];
    scores += student.score
}

let average = scores/students.length

let passCount = 0;
for(let i=0; i<students.length; i++){
    if(students[i].score>60){
    passCount += 1
    }
} console.log(passCount)

let maxScore = students[0].score
for(let i = 0; i<students.length; i++){
    if(students[i].score > maxScore){
        maxScore = students[i].score
    }
}

let minScore = students[0].score
for(let i = 0; i<students.length; i++){
    if(students[i].score < minScore){
        minScore = students[i].score
    }
}
return {average, maxScore, minScore, passCount}  //여기. result에 객체 담는 곳에서 막힘

}
const result = study();
console.log(result)

