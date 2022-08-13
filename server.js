const app = require('./app');
const onStartUp = require('./utils/on-start-up');

app.listen(process.env.PORT, onStartUp);
