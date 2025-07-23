const AdminSettings = require('../models/AdminSettings');

const getSettings = async (req, res) => {
  try {
    const settings = await AdminSettings.findOne();
    res.json(settings || {});
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
};

const updateSettings = async (req, res) => {
  try {
    const update = req.body;
    let settings = await AdminSettings.findOne();
    if (settings) {
      Object.assign(settings, update);
    } else {
      settings = new AdminSettings(update);
    }
    await settings.save();
    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update settings' });
  }
};

module.exports = { getSettings, updateSettings };