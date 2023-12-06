function highAndLow(number){
    let arryOfNumbersAsStrings = numbers.split(" ");
    let numberArry = [];
    for (const numberAsString of arryOfNumbersAsStrings){
        const number = Number(numberAsString);
        numberArry.push(number);
    }
    console.log(numberArry);
}
let students = [1, 2, 3]
function print(...students){
    console.log(students);
}
print(students)