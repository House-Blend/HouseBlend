import db from '../models/houseBlendModel.cjs'; 

const dbController = {};

dbController.addZipToDB = (req, res, next) => {
    const {totalCoffeeShops, population, avgHousePrice, houseBlend, zipCode } = res.locals;

    const insertZipCode = `
     INSERT INTO zipcodes (zipcode, population, average_house_price, coffee_shops, blend_score)
     VALUES (${zipCode}, ${population}, ${avgHousePrice}, ${totalCoffeeShops}, ${houseBlend})
    `
    db.query(insertZipCode, () => {
        return next();
    })
}

export default dbController;

