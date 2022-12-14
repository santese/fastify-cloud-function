import { z } from 'zod'
import * as dotenv from 'dotenv'
dotenv.config()

const configSchema = z.object({
    apiKeys: z.array(z.string()).nonempty(),
})

const envConfig = JSON.parse(process.env.CONFIG || '{}')
export default configSchema.parse(envConfig)
