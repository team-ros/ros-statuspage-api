import { Router, Request, Response } from "express"
import { GetServices } from "../handlers/GetServices"
const router = Router()

router.get("/", async (req: Request, res: Response) => {
    try {
        res.json({
            status: true,
            services: (await GetServices()).map(value => value._id)
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