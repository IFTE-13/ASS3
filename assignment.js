
//Problem - 1
// Convert to meter from kilometer
var meter = 0;
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return ("Input valid value");
    }
    else {
        meter = kilometer * 1000;
        return meter;
    }
}
// var result = kilometerToMeter(10.5);
// console.log(result);


// Problem - 2
// Budget calculator for watch, mobile and laptop
var amount = 0;
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return ("One or more input is not valid");
    }
    else {
        amount = watch * 50 + phone * 100 + laptop * 500;
        return amount;
    }
}
// var totalAmount = budgetCalculator(1, 3, 5);
// console.log(totalAmount);



// Problem - 3
// Hotel cost calculation
var costFirstCategory = 0;
var costSecondCategory = 0;
var costThirdCategory = 0;
function hotelCost(day) {
    if (day < 0) {
        return ("Input valid value");
    }
    else {
        if (day <= 10) {
            costFirstCategory = day * 100;
            return costFirstCategory;
        }
        else if (day <= 20) {
            costSecondCategory = 100 * 10 + (100 - 20) * (day - 10);
            return costSecondCategory;
        }
        else {
            costThirdCategory = 100 * 10 + (100 - 20) * 10 + (100 - 50) * (day - 20);
            return costThirdCategory;
        }
    }
}
// var totalCost = hotelCost(-120);
// console.log(totalCost);



// Problem - 4
// Largest word or name in an array
function megaFriend(friendList){
    var bigName = friendList.length;
    
   if(friendList.length == 0){
       return ("There is no name");
   }
   else{
        for(var i = 0; i < friendList.length; i++){
        var element = friendList[i];
        if(bigName <= element.length){
            bigName = element.length;
            var bigMan = element;
        }
    }
    return bigMan;
   }
}
var bigFriendCheck = megaFriend(["Iftekhar", "Fardin", "Jitu", "Kalam"]);
console.log(bigFriendCheck);