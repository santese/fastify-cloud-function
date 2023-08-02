import { z } from 'zod'
import { config } from 'dotenv'
import { arrayFromString } from '../utils/zod'

config({
    path: 'environment/.env',
})

const envSchema = z.object({
    API_KEYS: arrayFromString(z.string()),
})

export default envSchema.parse(process.env)
