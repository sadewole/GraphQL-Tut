const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const cors = require('cors')
const db = require('./db')


// connect to db
db()

const app = express()
// allow cross-origin requests
app.use(cors())
// middlewares
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


const PORT = 5500
app.listen(PORT, () => console.log(`Running on port: ${PORT}`))