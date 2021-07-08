const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hanbyeol:<yhk00927>@boilerplate.cyfjz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlPArser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

mongodb+srv://hanbyeol:<password>@boilerplate.cyfjz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority