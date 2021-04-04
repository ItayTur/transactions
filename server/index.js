const express = require('express');
const transactionsRouter = require('./services/routers/transactionsRouter');
const port = process.env.PORT || 3001;

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());
app.use(transactionsRouter);

app.listen(port, () => {
    console.log('Server is up on port', port)
})