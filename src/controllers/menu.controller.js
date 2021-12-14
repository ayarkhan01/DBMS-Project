const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { menuService } = require('../services');

const createMenu = catchAsync(async (req, res) => {
  const menu = await menuService.createMenu(req.body);
  res.status(httpStatus.CREATED).send(menu);
});

const getMenu = catchAsync(async (req, res) => {
  const menus = await menuService.getMenus()
  res.status(httpStatus.OK).send(menus)
})

const getMenuByCategory = catchAsync(async(req, res) => {
  const filter = req.body;
  console.log(filter)
  const menus = await menuService.getMenuByCategory(filter)
  res.status(httpStatus.OK).send(menus)
})

module.exports = {
  createMenu,
  getMenu,
  getMenuByCategory
};
