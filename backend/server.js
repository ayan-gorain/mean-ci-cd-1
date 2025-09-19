const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')


require('dotenv').config()

const app=express();
const port=process.env.PORT||3000

app.use(cors())
app.use(express.json())

const authRouter=require('./routes/auth')
app.use('/auth',authRouter)


const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
    console.error('Missing MONGO_URI environment variable.');
    process.exit(1);
}
mongoose.connect(mongoUri, {
  serverSelectionTimeoutMS: 30000,
})
.then(() => console.log('MongoDB connected ✅'))
.catch(err => {
    console.error('MongoDB connection error ❌', err);
    process.exit(1);
});


app.get('/',(req,res)=>{
    res.send('Backend is running')
})

app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
    
})