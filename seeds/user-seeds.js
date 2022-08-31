const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [

    {
        email: 'bob@example.com',
        username: 'bob',
        password: 'password123'
    },
    {
        email: 'jill@example.com',
        username: 'Jill',
        password: 'password123'
    }
]


const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
