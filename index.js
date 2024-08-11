const { PORT } = require('./src/config.js');
const app = require('./src/server.js');

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
