import { ConnectionOptions } from 'typeorm'

const connectionOptions: ConnectionOptions = {
    type: 'postgres',
    database: "nuber",
    synchronize: true,
    logging: true,
    entities: [
        "entities/**/*.*"
    ],
    host: process.env.DB_ENDPOINT || 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME || 'plusbeauxjours',
    password: process.env.DB_USERNAME || ''
}
export default connectionOptions;