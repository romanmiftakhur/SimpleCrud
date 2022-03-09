const express = require('express');
const cors = require('cors');
const db = require('./config');
const Products = require('./models/productModel');
const router = require('./routes');

const app = express();
const port = process.env.PORT || 8080

db.authenticate().then(() => {
    console.log('Connected to database pern_crud');
}).catch(err => {
    console.log(err)
});

app.use(cors({ credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server running at port: ${port}` ));