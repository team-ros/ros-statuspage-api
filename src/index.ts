if(!process.env.DATABASE_URL) throw "no database url set"
if(!process.env.CRON) throw "no cron set"

import "./retrievers/requester"
import "./server/server"