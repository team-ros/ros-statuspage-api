import { query } from "express-validator"
import { VALIDATION_ERROR } from "./error"

export const ChartsModel = [
    query("service").isString().isURL()
]