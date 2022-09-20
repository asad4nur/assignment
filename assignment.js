//https://github.com/asad4nur/assignment

//haka to Rongpur distance in meter.
function kilometerToMeter(kilometer) {
    var oneMeter = 1000;
    var total = oneMeter * kilometer;
    return total;
}
var hakaToRongpur = kilometerToMeter(5);
console.log(dhakaToRongpur);
//End/

//Budget calculation for watch mobile and laptop
function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = 150 * watch;
    var mobilePrice = 1000 * mobile;
    var laptopPrice = 2000 * laptop;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}
var totalCost = budgetCalculator(3, 4, 5);
console.log(totalCost);
//End/

//30 days hotel rent cost with discount.
function hotelCost(days) {
    if (days <= 0) {
        var output = "unexpected input";
    }
    else if (days <= 10) {
        var firstTenDyasRent = days * 100;
        var output = firstTenDyasRent;
    }
    else if (days > 10 && days <= 20) {
        var firstTenDaysRent = 10 * 100;
        var secondTenDaysRent = days * 80;
        var output = firstTenDaysRent + secondTenDaysRent;
    }
    else {
        var firstTenDaysCost = 10 * 100;
        var secondTenDaysCost = 10 * 80;
        var thirdTenDaysCost = (days - 20) * 60;
        var output = firstTenDaysCost + secondTenDaysCost + thirdTenDaysCost;
    }
    return output;
}
var result = hotelCost(30);
console.log(result);
//End

//My friends name list and larger name from my friend names
function megaFriend(friendNames) {
    var largestName = friendNames[0];
    for (var i = 0; i <= friendNames.length; i++) {
        var element = friendNames[i];
        if (element > friendNames) {
            largestName = element;
        }
    } return largestName;
}
var friendsName = megaFriend(['Asad', 'Ariful', 'Masum-kamal', 'Kamal', 'Sumon-hossain'])
console.log(friendsName);
//End