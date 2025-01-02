var age = 20;
var price = 2000;
if(age<=12){
    console.log("kono tk lagbe na")
}
else if(age==50 || age==60){
    var discount = price*30/100;
    var payment = price - discount;
    console.log(payment)
}
else{
    var discount = price*50/100;
    var payment = price - discount;
    console.log(payment)
}

