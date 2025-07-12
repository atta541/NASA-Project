const nasaService = require('../services/nasa.service');

const getPatents = async (req, res, next) => {
  try {
    const { query } = req.query;
    const patents = await nasaService.getTechTransferPatents(query || '');
    res.json(patents);
  } catch (error) {
    next(error);
  }
};


const getPatentsIssued = async (req, res, next) => {
  try {
    const { query } = req.query;
    const patents = await nasaService.getTechTransferPatentsIssued(query || '');
    res.json(patents);
  } catch (error) {
    next(error);
  }
};

const getSoftware = async (req, res, next) => {
  try {
    const { query } = req.query;
    const software = await nasaService.getTechTransferSoftware(query || '');
    res.json(software);
  } catch (error) {
    next(error);
  }
};

const getSpinoffs = async (req, res, next) => {
  try {
    const { query } = req.query;
    const spinoffs = await nasaService.getTechTransferSpinoffs(query || '');
    res.json(spinoffs);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPatents,
  getPatentsIssued,
  getSoftware,
  getSpinoffs
};