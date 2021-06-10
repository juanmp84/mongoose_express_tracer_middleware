const {model, Schema} = require('mongoose');

const LoggerSchema = new Schema({
  user: {type: String, required: true},
  url: {type: String, required: true},
}, {
  timestamps: true
})

module.exports = model('logs', LoggerSchema)