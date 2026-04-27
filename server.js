const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Eventra server is running");
});

app.listen(PORT, ()=>{
  console.log("Your server is running on port http://localhost:5000")
})