// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Add custom middleware
server.use(middlewares);
server.use((req, res, next) => {
  if (req.query.name_like) {
    const regex = new RegExp(req.query.name_like, 'i');
    req.query.name = regex;
    delete req.query.name_like;
  }
  next();
});

server.use(router);
server.listen(8000, () => {
  console.log('JSON Server is running');
});
