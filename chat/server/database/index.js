const { Client } = require('pg')

const client = new Client({
  host: 'localhost',
  port: 5334,
  user: '',
  password: '',
})

client
  .connect()
  .then(() => console.log('connected'))
  .catch(err => console.error('connection error', err.stack))

module.exports = client;