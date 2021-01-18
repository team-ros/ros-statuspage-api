import { Router, Request, Response } from "express"
import { GetChartsOfService } from "../handlers/GetChartsOfService"
import { ChartsModel } from "../models/charts"
const router = Router()

router.get("/", ChartsModel, async (req: Request, res: Response) => {
    try {
        res.json({
            status: true,
            timestamp: Date.now(),
            cron: String(process.env.CRON),
            charts: (await GetChartsOfService({
                service: String(req.query.service),
            }))
            .map((value: {
                _id: string
                resource: string
                up: boolean
                timestamp: number
            }) => {
                return {
                    up: value.up,
                    timestamp: value.timestamp
                }
            })
        })
    }
    catch(err) {
        res.status(500).json({
            status: false,
            message: "internal server error"
        })
    }
})

export default router