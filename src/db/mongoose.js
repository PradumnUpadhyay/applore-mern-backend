const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
.then(()=>{console.log("DB connected!")})
.catch(err => console.log("DB Error: ",err))
