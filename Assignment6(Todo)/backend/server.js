const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const userRoute = require("./routes/userRoute");
const todoRoute = require("./routes/todoRoute") ;

app.use("/api/auth", userRoute);
app.use("/api/todos", todoRoute);

async function main() {
    mongoose.connect(process.env.MONGO_URL);
    app.listen(process.env.PORT);
    console.log("Listening on port " + process.env.PORT);
}

main();