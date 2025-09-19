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

mongoose.connect(uri, {

  serverSelectionTimeoutMS: 30000, // 30s timeout
})
.then(() => console.log('MongoDB connected ✅'))
.catch(err => console.error('MongoDB connection error ❌', err));


app.get('/',(req,res)=>{
    res.send('Backend is running')
})

app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
    
})