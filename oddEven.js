const numbers = [2,3,4,5,6,7,8,9,10,11,12,13,14];
function evenOdd(arry){
    const newArry = [];
    for(const list of arry){
        if(list%2 === 0){
            console.log(list)
            newArry.push(list)
        }
    }
    return newArry
}
const add = evenOdd(numbers);
console.log(add)