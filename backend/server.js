const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const srRouter = require('./routes/srs');
const actusRouter = require('./routes/actus');
const chercheursRouter = require('./routes/chercheurs');
const directeursRouter = require('./routes/directeurs');
const eventsRouter = require('./routes/events');
const partenairesRouter = require('./routes/partenaires');
const projetsRouter = require('./routes/projects');
const pubsRouter = require('./routes/pubs');
const thesesRouter = require('./routes/theses');

app.use('/sr',srRouter);
app.use('/actualites',actusRouter);
app.use('/chercheurs',chercheursRouter);
app.use('/directeurs',directeursRouter);
app.use('/events',eventsRouter);
app.use('/partenaires',partenairesRouter);
app.use('/projets',projetsRouter);
app.use('/publications',pubsRouter);
app.use('/theses',thesesRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});