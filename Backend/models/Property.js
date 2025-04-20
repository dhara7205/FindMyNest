const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title for the property'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description for the property'],
  },
  category: {
    type: String,
    required: [true, 'Please add a type for the property'],
  },
  price: {
    type: Number,
    required: [true, 'Please add a price for the property'],
  },
  location: {
    type: String,
    required: [true, 'Please add a location'],
  },
  contact: {
    type: String,
    required: [true, 'Please add contactNO.'],
  },
  images: {
    type: [String], // Array of image URLs
    required: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
