const Location = require('../models/locationModel');

const shareLocation = async (req, res) => {
  const { userName, lat, long } = req.body;

  try {
    const location = new Location({ userName, lat, long });
    await location.save();
    res.status(201).json({ message: 'Location shared successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const allLocations = await Location.find();
    res.json(allLocations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};







const getLocation = async (req, res) => {
  const userName = req.params.userName;

  try {
    const location = await Location.findOne({ userName });
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }

    res.json({lat: location.lat , long: location.long});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { shareLocation,getAllLocations, getLocation };
