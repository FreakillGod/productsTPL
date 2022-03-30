require('dotenv').config()
const express= require('express');
const cors=require('cors');

const app=express();
const product=require('./router/product');
const pageNotFound=require('./middleware/pageNotFound');

const connectDB= require('./DB/mongo');

const port=process.env.PORT || 5500;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/v1/product',product);

app.get('/',(req,res)=>{
    res.send('<h1> Welcome </h1>')
})

app.use(pageNotFound);

const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>console.log(`server is listening on port ${port}...`));
    } catch (error) {
        console.log(error)
    }
}
start()