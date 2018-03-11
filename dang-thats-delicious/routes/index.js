const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const {catchErrors} = require('../handlers/errorHandlers');
const myMiddleware = (req, res, next) => {
  console.log(req);
  req.name = 'Dennis';
  next(); 
};
// Do work here
router.get('/', catchErrors(storeController.getStores));
router.get('/stores', storeController.getStores);
router.get('/add', storeController.addStore)
//router.get('/', myMiddleware, storeController.homePage);
router.post('/add', catchErrors( storeController.createStore));
 

module.exports = router;