const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')


require('dotenv').config()

const app=express();
const port=process.env.PORT||3000

app.use(cors())
app.use(express.json())


const uri=process.env.MONGO_URI
mongoose.connect(uri)
.then(()=>console.log('mongodb connected')
)
.catch(err=>console.error(err)
)

app.get('/',(req,res)=>{
    res.send('Backend is running')
})

app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
    
})