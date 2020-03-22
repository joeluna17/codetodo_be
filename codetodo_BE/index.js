require("dot-env").config;
const server = require('./server');
const PORT = process.env.PORT || 4000;
// LOOK into mix panel, Sentry



server.listen(PORT, () => {
    console.log(`Magic man on port: ${PORT}`);
})