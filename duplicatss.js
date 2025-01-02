const friends = ['rakib','sakib','jidan','najmul','uzzal','anamul','jidan','najim','sakib','shorif','najmul'];
function soRR(arrys){
    const newArry = [];
    for(const bondu of arrys){
        if(newArry.includes(bondu) ===false){
            newArry.push(bondu)
        }
    }
    return(newArry)
}
const add = soRR(friends);
console.log(add)