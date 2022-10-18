const express = require('express');
const morgan = require('morgan');
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(require('./routes/taks.routes'));

// Server on Reading
app.listen(4000, ()=>{
    console.log('server on port 4000')
})
