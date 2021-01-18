import { CronJob } from "cron"
import { uptime } from "../database/schema"
import { UptimeRetriever } from "./retriever"

const urls = [
    "https://www.ros-cloud.at",
    "https://api.ros-cloud.at/health",
    "https://cdn.ros-cloud.at/minio/health/live"
]

new CronJob(String(process.env.CRON), () => {
    console.log("REQUESTS STARTED", Date.now())
    urls.forEach(async value => {
        try {
            const result = await UptimeRetriever(value)
            WriteResultToDatabase(value, result)
        }
        catch(err) {
            WriteResultToDatabase(value, false)
        }
    })
}, null, true, "Europe/Vienna")
.start()

const WriteResultToDatabase = async (url: string, result: boolean) => {
    try {
        await uptime.create({
            resource: url,
            up: result
        })
    }
    catch(err) {
        console.log("DATABASE_ERROR:", err)
    }
}
