require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { handleBoom } = require('./middleware/boomError');
const { crearApi } = require('./router');
const app = express();
const puesto = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
crearApi(app);

app.use(handleBoom);
app.get( '/',(req, res)=>{
    res.json({message:"Bienvenido"});
});

app.listen(puesto);