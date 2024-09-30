function calculate(grade){
    if(grade>79  && grade <= 100){
        return 'A'
    } 
    else if(grade<=79 &&  grade >=60){
        return 'B'
    } 
    else if(grade<=59 && grade >=50){
        return 'C'}
else if (grade<=49 && grade >=40){
    return 'D'}
    else if (grade<=39 && grade >=0){return 'E'}
    
}
let grade = 60
let results = calculate (grade)
console.log(`grade is ${grade} equals : ${results}`)
