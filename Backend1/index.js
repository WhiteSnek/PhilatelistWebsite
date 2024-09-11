const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const philatelistRoutes = require('./routes/philatelistRoutes')
const connectDB = require('./databaseConnection/db')

const app = express();
const PORT = process.env.PORT || 4022
connectDB();
app.use(express.json());
// app.use('/',(req,res)=>{
//     res.send("user can access home page");
//     console.log("home page");
// })
app.use('/api/philatelist', philatelistRoutes);


app.use((err, req, res, next)=>{
    console.error(er.stack);
    res.status(500).json({message: 'Internal server error'});
});

app.listen(PORT,()=>{
    console.log("server is listening");
})
