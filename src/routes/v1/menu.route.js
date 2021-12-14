const express = require('express');
const menuController = require('../../controllers/menu.controller');

const router = express.Router();

router
  .route('/data')
  .get(menuController.getMenu)
  .post(menuController.createMenu);

router
  .route('/category')
  .post(menuController.getMenuByCategory)

module.exports = router;
