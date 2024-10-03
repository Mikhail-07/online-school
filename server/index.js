require ('dotenv').config();
const express = require ('express');
const path = require ('path')
const sequelize = require ('./db');
const fs = require('fs');
const models = require('./models/models.js');
const cors = require('cors');
const fileUpload = require('express-fileupload')
const router = require('./routes/index.js')
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js')

const PORT = process.env.PORT || 6000;

const app = express();

const staticDir = path.resolve(__dirname, 'static');
if (!fs.existsSync(staticDir)) {
  fs.mkdirSync(staticDir);
}

app.use(cors({ origin: 'https://online-school-nu.vercel.app' }));
app.use(express.json());
app.use(express.static(staticDir));
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