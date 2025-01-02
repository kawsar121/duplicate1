const numbers = [2,3,4,5,6,7,8,9,10,11,12,13,14];
function evenOdd(arry){
    const newArrys = [];
    for(const list of arry){
        if(list%2 === 0){
            console.log(list)
            newArrys.push(list)
        }
    }
    return newArrys
}
const add = evenOdd(numbers);
console.log(add)