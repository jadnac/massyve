require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DB_URI,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Successfully connected to database.')).catch(err => console.error("Error connecting to database", err))

mongoose.set('strictQuery', true)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('short'));

//CORS POLICIE
app.use(cors());
app.options('*', cors());


// ROUTES
app.use('/static', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.send('Welcome to PTP Api page');
});
require('./routes')(app);

// MISSING ROUTES
app.use('*', (req, res) => {
  return res.status(404).json({ message: 'Route not found' });
});

// SERVER PORT
const PORT = process.env.APP_PORT || 9900;

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});
