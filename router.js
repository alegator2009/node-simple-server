"use strict"

const ApiController = require("./controllers/api");
const swaggerUi = require("swagger-ui-express");
const router = require("express").Router();
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./config/openapi.yaml');

const api = new ApiController();

router.get("/products", api.getProducts);
router.get("/orders/:id/products", api.getOrderProducts);
router.post("/products", api.createProduct);
router.post("/orders", api.createOrder);
router.post("/orders/:order_id/products/:product_id", api.addProductToOrder);

router.use('/doc', swaggerUi.serve);
router.get('/doc', swaggerUi.setup(swaggerDocument));

module.exports = router;
