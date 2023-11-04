const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/Data/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log(`Test Custom Data API listening on port ${port}!`)
});