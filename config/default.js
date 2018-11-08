const { PORT } = process.env

module.exports = {
    app: {
        port: PORT || 8000
    },
    orm: {
        ormType: "typeorm",
        type: "sqlite",
        host: "localhost",
        port: 3306,
        username: "admin",
        password: "admin",
        database: "db.db",
        entities: [
            "src/models/**/*.ts"
        ],
    }
}