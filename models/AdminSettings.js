const mongoose = require('mongoose');

const adminSettingsSchema = new mongoose.Schema({
  vaultCode: {
    type: String,
    default: '00000'
  },
  bonusMax: {
    type: Number,
    default: 42.3
  },
  bonusMin: {
    type: Number,
    default: 5
  },
  bonusVariants: {
    type: [Number],
    default: []
  },
  predictionMega: {
    type: Boolean,
    default: false
  },
  predictionSuper: {
    type: Boolean,
    default: false
  },
  predictionPlayer: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('AdminSettings', adminSettingsSchema);
