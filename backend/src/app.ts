import "dotenv/config";
import express,{Request,Response} from 'express'
import cors from 'cors'

const app = express()
app.get('/hello',(req:Request, res:Response)=>{
    res.send("hello world")
})
app.use(cors())

export default app