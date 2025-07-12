const axios = require('axios');

class NasaService {
  constructor() {
    this.baseURL = 'https://api.nasa.gov';
    this.apiKey = process.env.NASA_API_KEY;
    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: 5000,
    });
  }

  async getAPOD(params = {}) {
    try {
      const response = await this.client.get('/planetary/apod', {
        params: {
          ...params,
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`NASA API error: ${error.message}`);
    }
  }

  async getAPODRange(startDate, endDate) {
    try {
      const response = await this.client.get('/planetary/apod', {
        params: {
          start_date: startDate,
          end_date: endDate,
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`NASA API error: ${error.message}`);
    }
  }


  // TechTransfer 

  async getTechTransferPatents(query = '') {
    try {
      const response = await this.client.get('/techtransfer/patent/', {
        params: {
          query,
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`NASA TechTransfer API error: ${error.message}`);
    }
  }

  async getTechTransferPatentsIssued(query = '') {
    try {
      const response = await this.client.get('/techtransfer/patent_issued/', {
        params: {
          query,
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`NASA TechTransfer API error: ${error.message}`);
    }
  }

  async getTechTransferSoftware(query = '') {
    try {
      const response = await this.client.get('/techtransfer/software/', {
        params: {
          query,
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`NASA TechTransfer API error: ${error.message}`);
    }
  }

  async getTechTransferSpinoffs(query = '') {
    try {
      const response = await this.client.get('/techtransfer/spinoff/', {
        params: {
          query,
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`NASA TechTransfer API error: ${error.message}`);
    }
  }

  //NeoWs service functions



  async getNeoFeed(startDate, endDate) {
    try {
      const response = await this.client.get('/neo/rest/v1/feed', {
        params: {
          start_date: startDate,
          end_date: endDate,
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`NASA NeoWs API error: ${error.message}`);
    }
  }

  async getNeoLookup(asteroidId) {
    try {
      const response = await this.client.get(`/neo/rest/v1/neo/${asteroidId}`, {
        params: {
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`NASA NeoWs API error: ${error.message}`);
    }
  }

  async getNeoBrowse() {
    try {
      const response = await this.client.get('/neo/rest/v1/neo/browse', {
        params: {
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`NASA NeoWs API error: ${error.message}`);
    }
  }


  ///////////////////////   Mars Rover Methods





  async getRoverPhotos(rover, params = {}) {
    try {
      const response = await this.client.get(`/mars-photos/api/v1/rovers/${rover}/photos`, {
        params: {
          ...params,
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`NASA Mars Rover API error: ${error.message}`);
    }
  }

  async getRoverManifest(rover) {
    try {
      const response = await this.client.get(`/mars-photos/api/v1/manifests/${rover}`, {
        params: {
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`NASA Mars Rover API error: ${error.message}`);
    }
  }


}










module.exports = new NasaService();