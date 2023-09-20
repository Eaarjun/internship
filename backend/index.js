const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const BlogModel = require('./schemas/BlogModel')
const { log } = require('console')
const app = express()
const port = 3000
const cors = require('cors')
const EmailModel  = require('./schemas/EmailModel')
//middleware express
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(
    cors({
     origin:"*",
        Access-Control-Allow-Origin:"*",
      methods: "GET,POST,",
    })
)

mongoose.connect(mongodb+srv://admin:CTsoVT1hpVIjNNZX@cluster0.pocdklc.mongodb.net/, { useNewUrlParser: true })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    BlogModel.find({ })
    .then( (docs)=> res.send(docs) )
})

app.post('/', (req, res) => {
    new BlogModel(req.body).save()
    res.send()
})

app.get('/email', (req, res) => {
    EmailModel.find({ })
    .then( (docs)=> res.send(docs) )
})

app.post('/email',(req,res)=>{
    new EmailModel(req.body).save()
    res.send()
})

// const emailPost = new EmailModel({
//     email:"a@b.com"
// })
// emailPost.save()
// const blogPost = new BlogModel({
//     _id: 4,
//     title: 'Blog Post 4',
//     content: 'This is the fourth blog post.',
//     author:"Akash"
// })
// blogPost.save()
