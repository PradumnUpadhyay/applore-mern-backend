const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
.then((val)=>{console.log("DB connected!",val)})
.catch(err => console.log("DB Error: ",err))
