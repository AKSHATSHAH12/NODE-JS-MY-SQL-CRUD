
const dbconfig = require('../config/dbconfig.js');

const { Sequelize ,DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,
    {
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        opreatorsAliases: false,
        pool:{
            max:dbconfig.pool.max,
            min:dbconfig.pool.min,
            acquire:dbconfig.pool.acquire,
            idle:dbconfig.pool.idle
        }


    }
)

sequelize.authenticate()
.then(() => {
 console,log('connected')
})
.catch(err =>{
    console.log('Error' + err)
})

const db = {}
db.sequelize = Sequelize
db.sequelize = sequelize

db.products = require(`./productModel.js`)(sequelize, DataTypes)
db.reviews = require(`./reviewModel.js`)(sequelize, DataTypes)

db.sequelize.sync({force: false})
.then(()=>{
    console.log('yes re-sync done!')
})

//1 to Many Relation
db.products.hasMany(db.reviews,{
    foreignKey:'product_id',
    as: 'review'
})

db.reviews.belongsTo(db.products,{
    foreignKey:'product_id',
    as: 'product'
})

module.exports = db