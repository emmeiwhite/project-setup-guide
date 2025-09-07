import app from './app'
import { Config } from './config'

const startServer = (): void => {
    const PORT: number = Config.PORT

    try {
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`)
        })
    } catch (error) {
        console.error(error)
    }
}

startServer()
