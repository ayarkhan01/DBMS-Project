const httpStatus = require('http-status');
const {Menu} = require('../models');


const createMenu = async (userBody) => {
    try {
        return Menu.create(userBody);
    } catch (error) {
        console.log("error occoured")
    }
};

const getMenus = async () => {
    try {
        const menus = await Menu.find({});
        return menus
    } catch (error) {
        console.log("error occoured")
    }
}

const getMenuByCategory = async (filter) => {
  try {
    const menus = await Menu.find(filter)
    return menus
  } catch (error) {
    console.log("error occoured")
}
}

module.exports = {
  createMenu,
  getMenus,
  getMenuByCategory
};
