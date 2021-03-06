require('dotenv/config')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const flashCardsRouter = require('./routes/flash-cards-router')

MongoClient
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
  .then(client => {
    const db = client.db('heroku_9vtlc56j')
    const collection = db.collection('cards')
    const publicPath = path.join(__dirname, 'public/') 
    express()
      .use(express.static(publicPath))
      .use(bodyParser.json())
      .use('/cards', flashCardsRouter(collection))
      .use((err, req, res, next) => {
        console.error(err)
        res.status(500).json({
          error: 'Internal Server Error'
        })
      })
      .listen(process.env.PORT, () => {
        console.log(`Listening on ${process.env.PORT}!`)
      })
  })