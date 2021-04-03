const express = require('express');
const transactionsRouter = require('./services/routers/transactionsRouter');
const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(transactionsRouter);

app.listen(port, () => {
    console.log('Server is up on port', port)
})