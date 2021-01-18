import { uptime } from "../../database/schema"

export const GetChartsOfService = (options: {
    service: string
}) => {
    return uptime.find({ resource: options.service }).sort({ up: 1 })
}