const db=require('../models')

// create main Model
const Product = db.products
const Review =db.reviews

// main works

// 1.create product

const addProduct = async(req,res) =>{
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false

    }
    const product = await Product.create(info)
    res.status(200).send(product)
}

// 2.get all products

const getAllProducts = async (req,res)=>{
    let products = await Product.findAll({
        
    })
    res.status(200).send(products)
}

// 3.get single product

const getOneProduct = async (req,res)=>{

    let id = req.params.id
    let product = await Product.findOne({
        where: {id: id}
    })
    res.status(200).send(product)
}

// 4.update product

const updateProduct = async (req,res)=>{

    let id = req.params.id
    
    const product = await Product.update(req.body, {where: {id: id}})
    res.status(200).send(product)
}

// 5.get delete  product by id

const deleteProduct = async (req,res)=>{

    let id = req.params.id
    await Product.destroy({where: {id: id}})
    res.status(200).send('prodcut is deleted !')
}

// 6.get published  product by id

const getPublishedProduct = async (req,res)=>{
    const products = 
    await Product.findAll({where: {published: true}})
    res.status(200).send(products)
}

//7. connect one to many relation product and review

const getProductReviews = async(req,res)=>{
     const data = await product.findAll({
        include:[{
            model: Review,
            as: 'review'
        }],
            where:{id: 2}
            
     })
}

module.exports={
    addProduct,getAllProducts,getOneProduct,updateProduct,deleteProduct,getPublishedProduct
}

