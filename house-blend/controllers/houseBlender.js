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

export default function houseBlender(pop, coffeeShops, medPrice){

    let coffeeShopPerPerson = pop / coffeeShops
    let houseBlendScore = medPrice / coffeeShopPerPerson

    return houseBlendScore.toFixed(2);

}