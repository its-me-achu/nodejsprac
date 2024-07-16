import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors())
const PORT=4000

app.get('/start', (req, res)=>{
    res.status(200).json({message:"Welcome to my world"})

})


app.listen(PORT,()=>{
    console.log("App is listening on the port:", PORT);
})