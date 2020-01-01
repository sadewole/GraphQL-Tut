const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')


const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


const PORT = 5500
app.listen(PORT, () => console.log(`Running on port: ${PORT}`))