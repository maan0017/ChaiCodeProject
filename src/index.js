// require('dotenv').config({ path: './env' });
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './evn'
});

connectDB()
    .then(
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is listening at : ${process.env.PORT}`);
        })
    )
    .catch((err) => {
        console.log("mongoDB connection failed !!! (index.js)-->");
    })



/*
const app = express();

; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", () => {
            console.log("error", error);
            throw error
        });

        app.listen(process.env.PORT, () => {
            console.log(`app is listening on ${process.env.PORT}`);
        });
    }
    catch (err) {
        console.error(err);
        throw err;
    }
})()

*/