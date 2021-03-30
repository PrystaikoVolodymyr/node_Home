const { Schema, model } = require('mongoose');

const carSubScheme = new Schema({
  model: { type: String },
  year: { type: Number }
}, { toObject: { virtuals: true }, toJSON: { virtuals: true } });

const userScheme = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
  car: [carSubScheme]
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

userScheme.virtual('yearOfBorn').get(function() {
  const year = 2021 - this.age;
  return year;
});
carSubScheme.virtual('carFullName').get(function() {
  return `${this.model}  ${this.year}`;
});
module.exports = model('User', userScheme);
