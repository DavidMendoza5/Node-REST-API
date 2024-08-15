const Repository = require('./repository');
const { User } = require('../database/models');

class UserRepository extends Repository {
    constructor () {
        super(User);
    }
}

module.exports = UserRepository;
