import { uptime } from "../../database/schema"

export const GetServices = () => {
    return uptime.aggregate([
         { $sortByCount: "$resource" }
    ])
}