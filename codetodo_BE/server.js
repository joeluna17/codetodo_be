require('dot-env');
const express = require('express');


//Middleware Setup
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const server = express(); // create the server

//Import Custom Routes
const NotesRouter = require('./Routes/NotesRouter');

//Set server to use Instasiated Middleware Objects
server.use(cors());
server.use(express.json()); //set rest data returned as JSON
server.use(morgan());
server.use(helmet());

server.use('/userNotes', NotesRouter);



server.get('/', (req, res) => {
    res.send('<h3>Server is up and Running. It gets scary beyond this point!</h3>')
})

module.exports = server;