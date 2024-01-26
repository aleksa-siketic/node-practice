const userModel = require('../models/userModel');

const createUser = () => {

}

const getUsers = () => {
    return userModel.find({});
}

const getUser = (id) => {
    return userModel.findById(id);
}

module.exports = {getUsers, getUser}