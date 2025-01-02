const numbers = [2,3,4,3,6,2,6,78,5,7,5,3,98,4,980];
function dupLicate(arry){
    const newa = [];
    for(const iteam of arry){
        if(newa.includes(iteam)===false){
            newa.push(iteam)
        }
    }
    return newa
}
const add = dupLicate(numbers);
console.log(add)