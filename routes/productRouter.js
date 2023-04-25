const   productController = require('../controller/productController.js')
const   reviewController = require('../controller/reviewController.js')
//router

const router = require('express').Router()

router.post('/addProduct',productController.addProduct)

router.get('/allProducts',productController.getAllProducts)

router.get('/published',productController.getPublishedProduct)

//Review routers
router.post('/addReview',reviewController.addReview)

router.get('/allReviews',reviewController.getAllReviews)

//product controller

router.get('/:id',productController.getOneProduct)

router.put('/:id',productController.updateProduct)

router.delete('/:id',productController.deleteProduct)

module.exports = router