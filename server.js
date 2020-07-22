const express = require('express');
const mongoose = require('mongoose');

const bodyParser =require('body-parser');
const config = require('./config');

//import routes
const productRoutes = require('./routes/product');

const PORT = config.PORT;

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

//apply routes
app.use('/products', productRoutes);

//DB config
const db = `${config.MONGO_URI}/${config.MONGO_DB_NAME}`;

//connect moongose
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));