require ('dotenv').config();
const express = require ('express');
const path = require ('path')
const sequelize = require ('./db');
const models = require('./models/models.js');
const cors = require('cors');
const fileUpload = require('express-fileupload')
const router = require('./routes/index.js')
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js')

const PORT = process.env.PORT || 6000;

const app = express();
app.use(cors(({
  origin: 'https://online-school-nu.vercel.app',
  methods: 'GET,POST,PUT,PATCH,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
})));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHandler)

app.get('/', (req, res) => {
  res.status(200).json({message: 'Working!!!'})
})

const start = async () => {
  try {
    sequelize.authenticate()
    sequelize.sync()
    app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`))
  } catch (e) {
    console.log(e)
  }
}

start();