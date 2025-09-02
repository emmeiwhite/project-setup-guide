import { config } from 'dotenv'
config()

const { PORT } = process.env // Currently we are getting the environmental variables from the .env file, but perhaps in other projects we may be getting them from other files, that's why we create a separate config file so that the transition is smooth

export const Config = {
    PORT,
}
