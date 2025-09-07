import { config } from 'dotenv'
config()

const PORT = process.env.PORT ?? '3000' // fallback to default if undefined

export const Config: { PORT: number } = {
    PORT: Number(PORT),
}
