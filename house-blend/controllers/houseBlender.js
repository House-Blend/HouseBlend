/** 
 *  API DATA NEEDED:
 * Median housing prices/ zip 
 * # of coffee shops per zip 
 * Number of people per zip
 * 
 */

/** 
 * Housblend TM Algo: 
 *  The houseblend store reflects the relationship between coffee shops, zip code population, and median home prices. 
 *  coffeeShopPerPerson variable reflects (Zip code population)/(Coffee shops in zip code)
 *  the houseBlend score reflects (Median house price)/coffeeShopPerPerson 
 *  As the coffee shops increase, so does the score, making it a desirable place to invest
 *  As housing prices decreases and coffee shop numbers remain strong, we will also show a desirable score
 * 
 */

export default function houseBlender(req, res, next) {
    //pop, coffeeShops, medPrice
    const { totalCoffeeShops, population, avgHousePrice } = res.locals;

    console.log(
        "The coffeeshops var:", totalCoffeeShops,
        "The population var:", population,
        "The avgHousePrice var:", avgHousePrice,
        "And their types are:", typeof totalCoffeeShops, typeof population, typeof avgHousePrice
    )

    let brewer = Number(totalCoffeeShops) * Number(avgHousePrice) / Number(population)
    res.locals.houseBlend = (brewer / 100) * 10;

    return next();

}