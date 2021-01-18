import { Schema, Document } from "mongoose"
import { connection } from "./connection"

interface IUptime extends Document {
    timestamp?: number
    resource: string
    up: boolean
}

export const uptime = connection.model<IUptime>("uptime", new Schema({
    timestamp: {
        type: Number,
        required: true,
        default: Date.now,
        index: true
    },
    resource: {
        type: String,
        required: true
    },
    up: {
        type: Boolean,
        required: true
    }
}))

