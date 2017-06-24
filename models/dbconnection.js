var mysql = require('mysql')
  , async = require('async')

var PRODUCTION_DB = 'app_prod_database'

exports.MODE_PRODUCTION = 'mode_production'

var state = {
  pool: null,
  mode: null,
}

exports.connect = function(mode, done) {
  state.pool = mysql.createPool({
    host: "localhost",
    user: "mcmullena",
    password: "vfmiNVWR7OzgnHhG",
    database: 'interview2'
  })

  state.mode = mode
  done()
}

exports.get = function() {
  return state.pool
}