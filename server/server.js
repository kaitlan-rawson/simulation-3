const dotenv = require('dotenv'),
  bodyParser = require('body-parser')
  , port = process.env.PORT || 3030
  , massive = require('massive')
  , express = require('express')
  , app = express()

  require('dotenv').config()

  massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db)
    console.log('db connected')
  })

  app.use(bodyParser.json())
  
  //--------Axios Calls--------//
  app.get('/sim3/recFriends', (req, res) => {
    const db = app.get('db')
    console.log('hit')
    db.getReccFriends()
    .then(resp => {
      res.status(200).send(resp)
    })
  })

  app.listen(process.env.SERVER_PORT, () => {
    console.log( `Listening on port ${process.env.SERVER_PORT}`)
  })