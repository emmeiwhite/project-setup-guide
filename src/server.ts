import app from './app'
import { Config } from './config'
import logger from './config/logger'

const startServer = (): void => {
    const PORT: number = Config.PORT

    try {
        app.listen(PORT, () => {
            logger.error('testing error logs')
            logger.info('Server listening on port', { port: PORT })
        })
    } catch (error) {
        logger.error(error)
    }
}

startServer()
