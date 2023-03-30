import express from "express"
import morgan from "morgan"
import {PORT} from "./config.js"
import cors from "cors"

const app = express();

app.set("port",PORT)
app.use(cors())
app.use(morgan("dev"))



export default app;

