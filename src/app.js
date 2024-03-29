require('./db');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const BullNftRoutes = require ('./routes/NftRoute')
const UserRoutes = require ('./routes/UserRoute')

const app = express();

app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000' || 'https://www.thunderclient.com',
  credentials: true
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: Infinity
});


app.use(limiter);
app.name = 'BULLSWAPNFTAPI';
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(express.json());

app.use('/api/bullnft', BullNftRoutes)
app.use('/api/users', UserRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;