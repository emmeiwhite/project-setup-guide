import { config } from 'dotenv'
config()

type Environment = 'development' | 'production' | 'test'

const PORT = process.env.PORT ?? '3000'
// Grab env and check if it matches allowed ones
const env = process.env.NODE_ENV ?? 'development'
const allowedEnvs: Environment[] = ['development', 'production', 'test']

const NODE_ENV: Environment = allowedEnvs.includes(env as Environment)
    ? (env as Environment)
    : 'development'
export const Config: { PORT: number; NODE_ENV: Environment } = {
    PORT: Number(PORT),
    NODE_ENV,
}
