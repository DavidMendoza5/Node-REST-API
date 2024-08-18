const validateCredentials = require('../utils/validate.credentials');
const generateToken = require('../utils/generate.token');
const UserRepository = require('../repository/user.repository');

const userRepository = new UserRepository();

const logInUserService = async (data) => {
    try {
        const email = { email: data.email };
        const response = await userRepository.get(email);

        if (!response) throw new Error('Error en las credenciales');

        const valid = await validateCredentials(data.password, response.password);

        if (!valid) throw new Error('Error en las credenciales');

        const dataToSign = {
            id: response.id,
            email: response.email,
        };

        const token = generateToken(dataToSign);

        return token;
    } catch (error) {
        return { error: error.message, code: 401 };
    }
};

module.exports = {
    logInUserService,
};
