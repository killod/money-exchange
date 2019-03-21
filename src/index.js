// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    let result = {}

    let halfDollar = {
      shortName: "H",
      value: 50
    }

    const quarters = {
      shortName: "Q",
      value: 25
    }

    const dimes = {
      shortName: "D",
      value: 10
    }

    const nickels = {
      shortName: "N",
      value: 5
    }

    const pennies = {
      shortName: "P",
      value: 1
    }

    if(currency >= 10000){
        result.error ="You are rich, my friend! We don't have so much coins for exchange";
    }else {
        if (currency >= halfDollar.value){
            result[halfDollar.shortName] = Math.floor(currency / halfDollar.value);
            currency %= halfDollar.value;
        }
        if (currency >= quarters.value){
            result[quarters.shortName] = Math.floor(currency / quarters.value);
            currency %= quarters.value;
        }
        if (currency >= dimes.value){
            result[dimes.shortName] = Math.floor(currency / dimes.value);
            currency %= dimes.value;
        }
        if (currency >= nickels.value){
            result[nickels.shortName] = Math.floor(currency / nickels.value);
            currency %= nickels.value;
        }
        if (currency >= pennies.value){
            result[pennies.shortName] = Math.floor(currency / pennies.value);
            currency %= pennies.value;
        }
    }

    return result;
}
