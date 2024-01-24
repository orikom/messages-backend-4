const express = require('express');
const messagesRouter = require('./routers/messagesRouter');
const app = express();

require('dotenv').config({path: './config/.env'})
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(messagesRouter);

require('./db/mongoose');

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on port ${port}...!`);
})