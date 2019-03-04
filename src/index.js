// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if( currency > 10000 ){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } 
    
    var nameCoins = ['H', 'Q', 'D', 'N', 'P'];
    var coinsNominal = [50, 25, 10, 5, 1];
    var returnObj = {}, tmp = 0;

    for( var i = 0; i < coinsNominal.length; i++ ){
        tmp = Math.floor(currency/coinsNominal[i]);
        if( tmp > 0 ){
            returnObj[nameCoins[i]] = tmp;
        }
        currency = currency - tmp*coinsNominal[i];
        if( currency <= 0 ){
            break;
        }
    }

    return returnObj;
}
