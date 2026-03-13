const express = require('express');
const dotenv = require('dotenv');
const mainRoutes = require('./main.routes');
const carRoutes = require('./car.routes');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/', mainRoutes);
app.use('/cars', carRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
