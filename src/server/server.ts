import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.listen(Number(process.env.PORT || 8080))

import services from "../app/controllers/services"
import charts from "../app/controllers/charts"

app.use("/services", services)
app.use("/charts", charts)

