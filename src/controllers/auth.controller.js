const authService = require('../services/auth.service');

const logIn = async (req, res) => {
    let code = 200;
    try {
        const user = req.body;

        const token = await authService.logInUserService(user);

        if (token.error) {
            code = 401;
            throw new Error('Error en las credenciales');
        }

        res.status(code).send({ token, message: 'Sesión iniciada' });
    } catch (error) {
        res.status(code).send({ message: error.message });
    }
};

module.exports = {
    logIn,
};
