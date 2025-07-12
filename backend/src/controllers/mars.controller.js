const nasaService = require('../services/nasa.service');

const validRovers = ['curiosity', 'opportunity', 'spirit'];
const validCameras = [
  'FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 
  'MARDI', 'NAVCAM', 'PANCAM', 'MINITES'
];

const getRoverPhotos = async (req, res, next) => {
  try {
    const { rover } = req.params;
    const { sol, earth_date, camera, page } = req.query;
    
    if (!validRovers.includes(rover.toLowerCase())) {
      return res.status(400).json({
        error: 'Invalid rover name. Valid options: curiosity, opportunity, spirit'
      });
    }

    if (!sol && !earth_date) {
      return res.status(400).json({
        error: 'Either sol or earth_date parameter is required'
      });
    }

    if (sol && earth_date) {
      return res.status(400).json({
        error: 'Use either sol or earth_date, not both'
      });
    }

    if (camera && !validCameras.includes(camera.toUpperCase())) {
      return res.status(400).json({
        error: 'Invalid camera name',
        validCameras: validCameras
      });
    }

    const params = {
      ...(sol && { sol }),
      ...(earth_date && { earth_date }),
      ...(camera && { camera: camera.toUpperCase() }),
      ...(page && { page })
    };

    const photos = await nasaService.getRoverPhotos(rover, params);
    res.json(photos);
  } catch (error) {
    next(error);
  }
};

const getRoverManifest = async (req, res, next) => {
  try {
    const { rover } = req.params;
    
    if (!validRovers.includes(rover.toLowerCase())) {
      return res.status(400).json({
        error: 'Invalid rover name. Valid options: curiosity, opportunity, spirit'
      });
    }

    const manifest = await nasaService.getRoverManifest(rover);
    res.json(manifest);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRoverPhotos,
  getRoverManifest
};