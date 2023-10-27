const express = require('express');
const app = express();
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use(errorHandler);

const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;


// app.get('/api/contacts', (req,res)=>{
//     res.status(200).json({message: 'Get all Contacts.'});
// });

app.listen(port, () => {
    console.log(`app is listening at ${port}`);
});