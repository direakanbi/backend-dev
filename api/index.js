import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express();
const port = process.env.PORT || 3000

const email = "direakanbi@icloud.com"
const github_url = "https://github.com/direakanbi/backend-dev"


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/mybackend-details', (req, res) => {
    res.json({
        email: email,
        current_datetime: new Date().toISOString(),
        github_url: github_url
    })
}) 

app.listen(port, () => {
    console.log("Server is listening: ", port)
})