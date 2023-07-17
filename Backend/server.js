require("dotenv").config()
const express = require("express")
const cors = require("cors")
const todoRoutes = require("./routes/todos")
const app = express()
const Connect = require("./db/connect")
const NotFound = require("./middleware/notFound")


app.use(cors());


//middleware for json
app.use(express.json())

const port = process.env.PORT || 8080;



app.use('/api/todos', todoRoutes)
app.use(NotFound)
const Start = async () => {
    try {
        app.listen(port, console.log(`server is listening on ${port}..`))
        await Connect(process.env.MONGO_URI).then(() => console.log("connected to db~..."))
    } catch (error) {
        console.log(error);
    }
}



Start();
