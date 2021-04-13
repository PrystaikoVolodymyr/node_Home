const { Schema, model } = require('mongoose');

const girlSubScheme = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
});
const userSchema = new Schema({
  name: { type: String, required: true },
  yearOfBorn: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  job: { type: Boolean },
  girl: { type: girlSubScheme },
  language: { type: String, default: 'en' }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

module.exports = model('User', userSchema);
