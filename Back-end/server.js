var cors = require("cors");
const express = require("express");

const app = express();

//routes
const slide = require('./routers/slideRouter.js');

// cors
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}));

// Init Middleware
app.use(express.json({ extended: false }));
app.use(express.static('imagecheck'));

//test
app.get("/", (req, res) => res.send("Hello world!"));

//use router
app.use("/api/carousel", slide);

const port = process.env.PORT || 3600;

app.listen(port, () => console.log(`Server running on port ${port}`));