import axios from "axios"

export const UptimeRetriever = async (url: string) => {
    try {
        const request = await axios.get(url)
        if(request.status === 200) return true
        return false
    }
    catch(err) {
        return false
    }
}

